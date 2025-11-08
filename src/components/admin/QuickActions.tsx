import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Package, Mail, BarChart } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "Add Product",
      description: "Create a new product listing",
      icon: Plus,
      action: () => console.log("Add product")
    },
    {
      title: "Manage Orders",
      description: "View and process orders",
      icon: Package,
      action: () => console.log("Manage orders")
    },
    {
      title: "Email Campaign",
      description: "Send newsletter to customers",
      icon: Mail,
      action: () => console.log("Email campaign")
    },
    {
      title: "View Analytics",
      description: "Check site performance",
      icon: BarChart,
      action: () => console.log("View analytics")
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common administrative tasks</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant="outline"
            className="h-auto flex-col items-start p-4 space-y-2"
            onClick={action.action}
          >
            <div className="flex items-center gap-2 w-full">
              <action.icon className="h-5 w-5 text-accent" />
              <span className="font-semibold">{action.title}</span>
            </div>
            <p className="text-xs text-muted-foreground text-left">
              {action.description}
            </p>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
