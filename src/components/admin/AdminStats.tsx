import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, TrendingUp, DollarSign } from "lucide-react";

const AdminStats = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "0",
      icon: ShoppingBag,
      description: "All time orders",
      color: "text-accent"
    },
    {
      title: "Total Users",
      value: "1",
      icon: Users,
      description: "Registered users",
      color: "text-primary"
    },
    {
      title: "Revenue",
      value: "$0",
      icon: DollarSign,
      description: "Total revenue",
      color: "text-accent"
    },
    {
      title: "Growth",
      value: "0%",
      icon: TrendingUp,
      description: "vs last month",
      color: "text-primary"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminStats;
