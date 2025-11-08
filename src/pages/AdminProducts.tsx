import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, ArrowLeft } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string;
  collection: string;
  is_featured: boolean;
  is_new_arrival: boolean;
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    collection: "power",
    is_featured: false,
    is_new_arrival: false,
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate("/admin/login");
      return;
    }
    fetchProducts();
  }, [user, isAdmin, navigate]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast({
        title: "Error",
        description: "Failed to fetch products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const productData = {
        name: formData.name,
        description: formData.description || null,
        price: parseFloat(formData.price),
        image_url: formData.image_url,
        collection: formData.collection,
        is_featured: formData.is_featured,
        is_new_arrival: formData.is_new_arrival,
      };

      if (editingProduct) {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", editingProduct.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Product updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("products")
          .insert([productData]);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Product created successfully",
        });
      }

      setDialogOpen(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      toast({
        title: "Error",
        description: "Failed to save product",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || "",
      price: product.price.toString(),
      image_url: product.image_url,
      collection: product.collection,
      is_featured: product.is_featured,
      is_new_arrival: product.is_new_arrival,
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      image_url: "",
      collection: "power",
      is_featured: false,
      is_new_arrival: false,
    });
    setEditingProduct(null);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    resetForm();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={() => navigate("/admin")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-playfair mb-2">Product Management</h1>
            <p className="text-muted-foreground">Manage all products across collections</p>
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
                <DialogDescription>
                  {editingProduct ? "Update product details" : "Create a new product"}
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collection">Collection</Label>
                    <Select
                      value={formData.collection}
                      onValueChange={(value) => setFormData({ ...formData, collection: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="power">Power</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="bridal">Bridal</SelectItem>
                        <SelectItem value="romantic">Romantic</SelectItem>
                        <SelectItem value="cocktail">Cocktail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="is_featured"
                      checked={formData.is_featured}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, is_featured: checked as boolean })
                      }
                    />
                    <Label htmlFor="is_featured" className="cursor-pointer">
                      Featured Product
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="is_new_arrival"
                      checked={formData.is_new_arrival}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, is_new_arrival: checked as boolean })
                      }
                    />
                    <Label htmlFor="is_new_arrival" className="cursor-pointer">
                      New Arrival
                    </Label>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingProduct ? "Update Product" : "Create Product"}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4">
          {products.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No products yet. Add your first product to get started.</p>
              </CardContent>
            </Card>
          ) : (
            products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-sm text-muted-foreground capitalize">{product.collection} Collection</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(product)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(product.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm mb-3">{product.description}</p>
                      <div className="flex gap-4 items-center">
                        <span className="font-semibold">${product.price}</span>
                        {product.is_featured && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Featured</span>
                        )}
                        {product.is_new_arrival && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">New Arrival</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
