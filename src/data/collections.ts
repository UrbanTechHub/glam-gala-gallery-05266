// Collection data with female stylish dresses
import power1 from "@/assets/power-1.jpg";
import power2 from "@/assets/power-2.jpg";
import power3 from "@/assets/power-3.jpg";
import power4 from "@/assets/power-4.jpg";
import power5 from "@/assets/power-5.jpg";
import power6 from "@/assets/power-6.jpg";

import evening1 from "@/assets/evening-1.jpg";
import evening2 from "@/assets/evening-2.jpg";
import evening3 from "@/assets/evening-3.jpg";
import evening4 from "@/assets/evening-4.jpg";
import evening5 from "@/assets/evening-5.jpg";
import evening6 from "@/assets/evening-6.jpg";

import casual1 from "@/assets/casual-1.jpg";
import casual2 from "@/assets/casual-2.jpg";
import casual3 from "@/assets/casual-3.jpg";
import casual4 from "@/assets/casual-4.jpg";
import casual5 from "@/assets/casual-5.jpg";
import casual6 from "@/assets/casual-6.jpg";

import romantic1 from "@/assets/romantic-1.jpg";
import romantic2 from "@/assets/romantic-2.jpg";
import romantic3 from "@/assets/romantic-3.jpg";
import romantic4 from "@/assets/romantic-4.jpg";
import romantic5 from "@/assets/romantic-5.jpg";
import romantic6 from "@/assets/romantic-6.jpg";

import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail-5.jpg";
import cocktail6 from "@/assets/cocktail-6.jpg";

import bridal1 from "@/assets/bridal-1.jpg";
import bridal2 from "@/assets/bridal-2.jpg";
import bridal3 from "@/assets/bridal-3.jpg";
import bridal4 from "@/assets/bridal-4.jpg";
import bridal5 from "@/assets/bridal-5.jpg";
import bridal6 from "@/assets/bridal-6.jpg";

export interface Product {
  id: string;
  image: string;
  images?: string[];
  title: string;
  description: string;
  fullDescription?: string;
  price: number;
  badge?: string;
  collection: string;
  sizes?: string[];
  material?: string;
  care?: string;
}

export const collections = {
  power: {
    name: "Power Collection",
    description: "Tailored pieces that command attention and exude confidence",
    products: [
      {
        id: "pc-1",
        image: power1,
        images: [power1, power2, power3],
        title: "Executive Blazer Dress",
        description: "Structured black blazer dress with gold buttons",
        fullDescription: "A commanding presence in our Power Collection, this executive blazer dress combines sharp tailoring with feminine elegance. Features structured shoulders, a cinched waist, and luxe gold button details.",
        price: 215,
        badge: "Bestseller",
        collection: "power",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Premium Italian wool blend with silk lining. Structured yet comfortable.",
        care: "Dry clean only. Store on a padded hanger."
      },
      {
        id: "pc-2",
        image: power2,
        images: [power2, power1],
        title: "Tailored Wrap Dress",
        description: "Navy blue wrap dress with waist belt",
        fullDescription: "This sophisticated wrap dress in rich navy features a flattering V-neckline and adjustable waist belt. Perfect for boardroom to dinner transitions.",
        price: 185,
        collection: "power",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Stretch crepe fabric for comfort and polish. Machine washable.",
        care: "Machine wash cold, hang to dry. Iron on medium heat if needed."
      },
      {
        id: "pc-3",
        image: power3,
        images: [power3, power4],
        title: "Pencil Dress",
        description: "Charcoal grey fitted pencil dress",
        fullDescription: "Classic pencil silhouette in sophisticated charcoal grey. Tailored to perfection with princess seams for a figure-flattering fit.",
        price: 165,
        collection: "power",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Premium ponte knit with excellent stretch and recovery.",
        care: "Machine wash cold on gentle cycle. Lay flat to dry."
      },
      {
        id: "pc-4",
        image: power4,
        images: [power4, power5],
        title: "Power Suit Dress",
        description: "Pinstripe double-breasted dress",
        fullDescription: "Make a bold statement in this pinstripe double-breasted dress. Inspired by classic menswear tailoring with a feminine twist.",
        price: 225,
        collection: "power",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Italian pinstripe wool blend with satin trim.",
        care: "Dry clean only. Professional press recommended."
      },
      {
        id: "pc-5",
        image: power5,
        images: [power5, power6],
        title: "Sheath Dress",
        description: "Elegant black sheath with asymmetric neckline",
        fullDescription: "Timeless elegance meets modern design in this black sheath dress. Features an asymmetric neckline and sleek silhouette.",
        price: 195,
        badge: "New",
        collection: "power",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Luxe stretch crepe with hidden back zipper.",
        care: "Dry clean recommended. Steam to remove wrinkles."
      },
      {
        id: "pc-6",
        image: power6,
        images: [power6, power1],
        title: "Belted Midi Dress",
        description: "Camel-colored belted midi with pockets",
        fullDescription: "Effortlessly chic midi dress in warm camel tone. Features functional pockets and adjustable belt for versatile styling.",
        price: 175,
        collection: "power",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft brushed cotton blend with stretch.",
        care: "Machine wash cold. Tumble dry low."
      }
    ]
  },
  evening: {
    name: "Evening Collection",
    description: "Elegant evening wear for unforgettable moments",
    products: [
      {
        id: "ec-1",
        image: evening1,
        images: [evening1, evening2],
        title: "Sequin Gown",
        description: "Floor-length champagne sequin gown",
        fullDescription: "Dazzle in this stunning floor-length gown adorned with shimmering champagne sequins. Perfect for galas and formal events.",
        price: 225,
        badge: "Bestseller",
        collection: "evening",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Hand-sewn sequins on silk base with satin lining.",
        care: "Dry clean only. Store flat or hanging with garment bag."
      },
      {
        id: "ec-2",
        image: evening2,
        images: [evening2, evening3],
        title: "Velvet Midi Dress",
        description: "Emerald green velvet with V-neck",
        fullDescription: "Rich emerald velvet creates a luxurious texture in this elegant midi dress. Features a flattering V-neckline and fitted silhouette.",
        price: 195,
        collection: "evening",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Premium stretch velvet with silk blend lining.",
        care: "Dry clean only. Steam gently if needed."
      },
      {
        id: "ec-3",
        image: evening3,
        images: [evening3, evening4],
        title: "Satin Slip Dress",
        description: "Burgundy satin cowl neck dress",
        fullDescription: "Effortlessly elegant satin slip dress in deep burgundy. Features a dramatic cowl neckline and bias-cut skirt.",
        price: 165,
        collection: "evening",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "100% silk charmeuse satin. Fully lined.",
        care: "Dry clean only. Handle with care."
      },
      {
        id: "ec-4",
        image: evening4,
        images: [evening4, evening5],
        title: "Embellished Gown",
        description: "Black gown with crystal embellishments",
        fullDescription: "A show-stopping black gown adorned with Swarovski crystals. Designed to make you shine at the most elegant affairs.",
        price: 225,
        badge: "Luxury",
        collection: "evening",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Italian crepe with hand-applied crystal embellishments.",
        care: "Professional dry clean only. Store with protective cover."
      },
      {
        id: "ec-5",
        image: evening5,
        images: [evening5, evening6],
        title: "Off-Shoulder Dress",
        description: "Royal blue off-shoulder cocktail dress",
        fullDescription: "Make an entrance in this royal blue off-shoulder dress. Features structured bodice and flowing skirt.",
        price: 185,
        collection: "evening",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Structured taffeta with hidden boning support.",
        care: "Dry clean only. Professional press recommended."
      },
      {
        id: "ec-6",
        image: evening6,
        images: [evening6, evening1],
        title: "Lace Evening Dress",
        description: "Navy lace overlay with nude lining",
        fullDescription: "Sophisticated navy lace creates an elegant overlay in this timeless evening dress. Nude lining provides beautiful contrast.",
        price: 205,
        badge: "New",
        collection: "evening",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "French lace overlay with silk nude lining.",
        care: "Dry clean only. Store flat to preserve lace."
      }
    ]
  },
  casual: {
    name: "Casual Elegance",
    description: "Effortlessly chic pieces for everyday sophistication",
    products: [
      {
        id: "cc-1",
        image: casual1,
        images: [casual1, casual2],
        title: "Linen Shirt Dress",
        description: "White linen with belt tie",
        fullDescription: "Effortlessly elegant linen shirt dress in crisp white. Features button-front closure and adjustable belt tie for a flattering silhouette.",
        price: 125,
        badge: "Summer",
        collection: "casual",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "100% European linen. Breathable and lightweight.",
        care: "Machine wash cold. Line dry. Iron while slightly damp for best results."
      },
      {
        id: "cc-2",
        image: casual2,
        images: [casual2, casual3],
        title: "Knit Sweater Dress",
        description: "Cozy beige ribbed knit dress",
        fullDescription: "Ultra-cozy ribbed knit dress in warm beige. Perfect for cooler days with soft, comfortable fabric.",
        price: 145,
        collection: "casual",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft merino wool blend with stretch.",
        care: "Hand wash cold or dry clean. Lay flat to dry."
      },
      {
        id: "cc-3",
        image: casual3,
        images: [casual3, casual4],
        title: "Cotton Midi Dress",
        description: "Floral print wrap-style midi",
        fullDescription: "Charming floral print midi with flattering wrap-style design. Features feminine ruffle details and adjustable tie.",
        price: 115,
        collection: "casual",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "100% cotton poplin with vibrant print.",
        care: "Machine wash cold. Tumble dry low."
      },
      {
        id: "cc-4",
        image: casual4,
        images: [casual4, casual5],
        title: "Denim Shirt Dress",
        description: "Classic chambray button-down dress",
        fullDescription: "Timeless chambray shirt dress with classic button-front and chest pockets. A wardrobe essential that never goes out of style.",
        price: 95,
        badge: "Essential",
        collection: "casual",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft chambray denim. Pre-washed for comfort.",
        care: "Machine wash cold. Tumble dry low. Light iron if needed."
      },
      {
        id: "cc-5",
        image: casual5,
        images: [casual5, casual6],
        title: "Jersey T-Shirt Dress",
        description: "Soft grey jersey with pockets",
        fullDescription: "The ultimate comfort dress in soft grey jersey. Features convenient side pockets and relaxed fit for all-day ease.",
        price: 85,
        collection: "casual",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft cotton-modal blend jersey. Ultra-comfortable.",
        care: "Machine wash cold. Tumble dry low."
      },
      {
        id: "cc-6",
        image: casual6,
        images: [casual6, casual1],
        title: "Striped Maxi Dress",
        description: "Navy and white nautical stripes",
        fullDescription: "Classic nautical-inspired maxi dress with navy and white stripes. Features comfortable fit and timeless seaside style.",
        price: 135,
        collection: "casual",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft jersey knit in cotton blend.",
        care: "Machine wash cold. Tumble dry low."
      }
    ]
  },
  romantic: {
    name: "Romantic Collection",
    description: "Feminine and dreamy designs for special moments",
    products: [
      {
        id: "rc-1",
        image: romantic1,
        images: [romantic1, romantic2],
        title: "Chiffon Maxi Dress",
        description: "Blush pink flowing chiffon",
        fullDescription: "Ethereal blush pink chiffon creates a dreamy maxi dress. Flowing fabric moves beautifully with every step.",
        price: 195,
        badge: "Romantic",
        collection: "romantic",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Delicate silk chiffon with satin lining.",
        care: "Dry clean only. Steam gently if needed."
      },
      {
        id: "rc-2",
        image: romantic2,
        images: [romantic2, romantic3],
        title: "Floral Midi Dress",
        description: "Rose print with ruffle details",
        fullDescription: "Feminine floral midi adorned with delicate ruffle details. Rose print creates a garden-fresh romantic look.",
        price: 165,
        collection: "romantic",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft crepe with floral print. Lined for comfort.",
        care: "Machine wash cold on gentle. Hang to dry."
      },
      {
        id: "rc-3",
        image: romantic3,
        images: [romantic3, romantic4],
        title: "Lace Tea Dress",
        description: "Ivory lace with scalloped hem",
        fullDescription: "Vintage-inspired tea dress in ivory lace. Features beautiful scalloped hem and timeless feminine charm.",
        price: 185,
        badge: "New",
        collection: "romantic",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Delicate floral lace with nude lining.",
        care: "Hand wash cold or dry clean. Lay flat to dry."
      },
      {
        id: "rc-4",
        image: romantic4,
        images: [romantic4, romantic5],
        title: "Silk Wrap Dress",
        description: "Lavender silk with flutter sleeves",
        fullDescription: "Luxurious lavender silk wrap dress with delicate flutter sleeves. Romantic and sophisticated for special occasions.",
        price: 205,
        collection: "romantic",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "100% silk charmeuse. Beautifully draped.",
        care: "Dry clean only. Handle with care."
      },
      {
        id: "rc-5",
        image: romantic5,
        images: [romantic5, romantic6],
        title: "Tulle Midi Dress",
        description: "Soft pink tulle overlay",
        fullDescription: "Dreamy tulle midi in soft pink creates a fairytale aesthetic. Layered tulle overlay adds volume and romance.",
        price: 175,
        collection: "romantic",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Soft tulle layers over satin lining.",
        care: "Dry clean only. Store carefully to maintain shape."
      },
      {
        id: "rc-6",
        image: romantic6,
        images: [romantic6, romantic1],
        title: "Embroidered Dress",
        description: "White cotton with floral embroidery",
        fullDescription: "Artisan-crafted white cotton dress adorned with delicate floral embroidery. Each piece is lovingly handcrafted.",
        price: 155,
        badge: "Handcrafted",
        collection: "romantic",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "100% cotton with hand embroidery details.",
        care: "Hand wash cold or gentle machine wash. Lay flat to dry."
      }
    ]
  },
  cocktail: {
    name: "Cocktail Collection",
    description: "Sophisticated styles for cocktail hours and parties",
    products: [
      {
        id: "ck-1",
        image: cocktail1,
        images: [cocktail1, cocktail2],
        title: "Little Black Dress",
        description: "Classic LBD with modern twist",
        fullDescription: "The essential little black dress reimagined with modern details. Timeless silhouette with contemporary edge.",
        price: 175,
        badge: "Essential",
        collection: "cocktail",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Premium stretch crepe with perfect structure.",
        care: "Dry clean recommended. Steam to refresh."
      },
      {
        id: "ck-2",
        image: cocktail2,
        images: [cocktail2, cocktail3],
        title: "Metallic Dress",
        description: "Silver metallic bodycon dress",
        fullDescription: "Show-stopping silver metallic dress with sleek bodycon fit. Perfect for making a glamorous entrance.",
        price: 185,
        collection: "cocktail",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Metallic jersey with stretch for comfort.",
        care: "Hand wash cold. Lay flat to dry. Do not iron."
      },
      {
        id: "ck-3",
        image: cocktail3,
        images: [cocktail3, cocktail4],
        title: "One-Shoulder Dress",
        description: "Red asymmetric cocktail dress",
        fullDescription: "Bold red cocktail dress with striking one-shoulder design. Asymmetric neckline creates dramatic statement.",
        price: 195,
        badge: "Bold",
        collection: "cocktail",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Structured stretch fabric with interior boning.",
        care: "Dry clean only. Professional press recommended."
      },
      {
        id: "ck-4",
        image: cocktail4,
        images: [cocktail4, cocktail5],
        title: "Sequin Mini Dress",
        description: "Gold sequin with cap sleeves",
        fullDescription: "Dazzling gold sequin mini dress with elegant cap sleeves. Perfect for celebrations and party nights.",
        price: 165,
        collection: "cocktail",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "All-over sequins on mesh base with lining.",
        care: "Dry clean only. Store flat or hanging carefully."
      },
      {
        id: "ck-5",
        image: cocktail5,
        images: [cocktail5, cocktail6],
        title: "Pleated Dress",
        description: "Emerald pleated chiffon cocktail",
        fullDescription: "Elegant emerald dress with flowing pleated chiffon skirt. Sophisticated movement with every step.",
        price: 175,
        collection: "cocktail",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Pleated chiffon over satin lining.",
        care: "Dry clean only. Do not iron pleats."
      },
      {
        id: "ck-6",
        image: cocktail6,
        images: [cocktail6, cocktail1],
        title: "Cutout Dress",
        description: "Black dress with elegant cutouts",
        fullDescription: "Sophisticated black dress featuring elegant strategic cutouts. Modern design with alluring details.",
        price: 185,
        badge: "Daring",
        collection: "cocktail",
        sizes: ["XS", "S", "M", "L", "XL"],
        material: "Structured crepe with power mesh insets.",
        care: "Dry clean recommended. Steam to refresh."
      }
    ]
  },
  bridal: {
    name: "Bridal Collection",
    description: "Timeless elegance for your special day",
    products: [
      {
        id: "bc-1",
        image: bridal1,
        images: [bridal1, bridal2],
        title: "Classic A-Line Gown",
        description: "Ivory satin with cathedral train",
        fullDescription: "Timeless A-line wedding gown in luxurious ivory satin. Features dramatic cathedral train and elegant simplicity.",
        price: 225,
        badge: "Signature",
        collection: "bridal",
        sizes: ["0", "2", "4", "6", "8", "10", "12", "14"],
        material: "Silk satin with structured bodice and flowing skirt.",
        care: "Professional wedding dress preservation recommended."
      },
      {
        id: "bc-2",
        image: bridal2,
        images: [bridal2, bridal3],
        title: "Lace Wedding Dress",
        description: "Romantic lace with illusion neckline",
        fullDescription: "Romantic lace wedding dress featuring delicate illusion neckline. Intricate lace details create timeless beauty.",
        price: 225,
        collection: "bridal",
        sizes: ["0", "2", "4", "6", "8", "10", "12", "14"],
        material: "French Alençon lace with silk lining.",
        care: "Professional cleaning and preservation required."
      },
      {
        id: "bc-3",
        image: bridal3,
        images: [bridal3, bridal4],
        title: "Minimalist Gown",
        description: "Sleek white satin slip dress",
        fullDescription: "Modern minimalist gown in pure white satin. Clean lines and sleek silhouette for contemporary brides.",
        price: 195,
        badge: "Modern",
        collection: "bridal",
        sizes: ["0", "2", "4", "6", "8", "10", "12", "14"],
        material: "Premium silk charmeuse satin. Bias-cut for perfect drape.",
        care: "Dry clean only. Professional preservation recommended."
      },
      {
        id: "bc-4",
        image: bridal4,
        images: [bridal4, bridal5],
        title: "Boho Wedding Dress",
        description: "Flowy bohemian with bell sleeves",
        fullDescription: "Free-spirited bohemian gown with romantic bell sleeves. Flowy silhouette perfect for outdoor weddings.",
        price: 205,
        collection: "bridal",
        sizes: ["0", "2", "4", "6", "8", "10", "12", "14"],
        material: "Soft chiffon with delicate lace details.",
        care: "Professional cleaning recommended. Handle with care."
      },
      {
        id: "bc-5",
        image: bridal5,
        images: [bridal5, bridal6],
        title: "Ball Gown",
        description: "Princess-style with beaded bodice",
        fullDescription: "Fairytale ball gown with hand-beaded bodice. Full skirt creates dramatic princess silhouette.",
        price: 225,
        badge: "Royal",
        collection: "bridal",
        sizes: ["0", "2", "4", "6", "8", "10", "12", "14"],
        material: "Beaded silk bodice with layers of tulle skirt.",
        care: "Professional cleaning and preservation essential."
      },
      {
        id: "bc-6",
        image: bridal6,
        images: [bridal6, bridal1],
        title: "Tea-Length Dress",
        description: "Vintage-inspired tea-length gown",
        fullDescription: "Vintage-inspired tea-length wedding dress. Perfect for retro-loving brides seeking timeless charm.",
        price: 185,
        collection: "bridal",
        sizes: ["0", "2", "4", "6", "8", "10", "12", "14"],
        material: "Vintage-style lace over satin lining.",
        care: "Dry clean only. Store with care to maintain shape."
      }
    ]
  }
};

export const getAllProducts = (): Product[] => {
  return Object.values(collections).flatMap(collection => collection.products);
};

export const getProductsByCollection = (collectionName: string): Product[] => {
  const collection = Object.values(collections).find(
    c => c.name.toLowerCase().includes(collectionName.toLowerCase())
  );
  return collection?.products || [];
};
