import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, DollarSign, TrendingUp, MessageCircle, Download, Zap } from "lucide-react";

const cashRecoveryBundles = [
  {
    name: "Summer Clearance Bundle",
    items: ["Summer T-Shirts", "Cotton Shorts", "Sandals"],
    originalValue: 3240,
    discountPercent: 25,
    expectedRecovery: 2430,
    confidence: 92
  },
  {
    name: "Winter Overstock Pack",
    items: ["Winter Jackets", "Wool Scarves", "Boots"],
    originalValue: 5680,
    discountPercent: 35,
    expectedRecovery: 3692,
    confidence: 88
  },
  {
    name: "Accessories Quick Sale",
    items: ["Leather Bags", "Belts", "Watches"],
    originalValue: 2890,
    discountPercent: 20,
    expectedRecovery: 2312,
    confidence: 95
  }
];

const pricingExperiments = [
  { discount: 20, recovery: 85, demand: "High", recommended: true },
  { discount: 30, recovery: 78, demand: "Medium", recommended: false },
  { discount: 40, recovery: 65, demand: "Low", recommended: false }
];

const actionCards = [
  {
    type: "restock",
    title: "🚀 Restock Fast-Sellers",
    description: "Classic Denim Jeans are flying off the shelves! Reorder 50 units.",
    priority: "high",
    impact: "+$3,200 potential revenue"
  },
  {
    type: "stop",
    title: "🛑 Stop Slow Movers",
    description: "Winter Boots haven't sold in 45 days. Consider discontinuing.",
    priority: "medium",
    impact: "-$890 carrying cost saved"
  },
  {
    type: "promote",
    title: "📢 Promote Mid-Performers",
    description: "Cotton T-Shirts need a boost. Try social media campaign.",
    priority: "low",
    impact: "+$1,500 estimated uplift"
  }
];

export const AIInsights = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="glass-card p-8 bg-gradient-hero text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8" />
            <h1 className="text-3xl font-bold">🧠 AI Insights & Recommendations</h1>
          </div>
          <p className="text-xl text-white/90 mb-6">
            Your business BFF has analyzed your inventory and found smart ways to recover cash and optimize sales!
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Me
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
      </Card>

      {/* Free Cash Now Widget */}
      <Card className="glass-card p-6 border-success/20 shadow-success">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-success rounded-full">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">💸 Free Cash Now</h2>
            <p className="text-success font-medium">$8,434 recoverable this week</p>
          </div>
        </div>

        <div className="grid gap-4">
          {cashRecoveryBundles.map((bundle, index) => (
            <div key={index} className="p-4 rounded-lg bg-success-light/50 border border-success/20">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{bundle.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {bundle.items.join(", ")}
                  </p>
                </div>
                <Badge className="bg-success text-success-foreground">
                  {bundle.confidence}% confident
                </Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Original Value</p>
                  <p className="font-semibold text-foreground">${bundle.originalValue}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">With {bundle.discountPercent}% Off</p>
                  <p className="font-semibold text-success">${bundle.expectedRecovery}</p>
                </div>
                <div className="flex items-end justify-end">
                  <Button size="sm" className="bg-gradient-success hover:shadow-success">
                    <Zap className="h-4 w-4 mr-1" />
                    Execute
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Dynamic Pricing Experiments */}
      <Card className="glass-card p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">📊 Dynamic Pricing Sweet Spot</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          AI analyzed similar products and found your optimal discount rate for maximum recovery.
        </p>

        <div className="grid gap-4">
          {pricingExperiments.map((experiment, index) => (
            <div key={index} className={`p-4 rounded-lg border ${
              experiment.recommended 
                ? "bg-primary/5 border-primary/20" 
                : "bg-muted/30 border-border/50"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-foreground">
                    {experiment.discount}% Discount
                  </span>
                  {experiment.recommended && (
                    <Badge className="bg-primary text-primary-foreground">
                      ⭐ AI Recommended
                    </Badge>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{experiment.recovery}% Recovery</p>
                  <p className="text-sm text-muted-foreground">{experiment.demand} Demand</p>
                </div>
              </div>
              <Progress value={experiment.recovery} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {actionCards.map((action, index) => {
          const isPriority = action.priority === "high";
          const isMedium = action.priority === "medium";
          
          return (
            <Card key={index} className={`glass-card p-6 hover-lift ${
              isPriority ? "border-success/20" : 
              isMedium ? "border-warning/20" : 
              "border-border"
            }`}>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {action.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      isPriority ? "destructive" : 
                      isMedium ? "secondary" : 
                      "outline"
                    }>
                      {isPriority ? "🔥 High Priority" : 
                       isMedium ? "⚠️ Medium" : 
                       "💡 Consider"}
                    </Badge>
                  </div>
                  
                  <p className="text-sm font-medium text-success">
                    {action.impact}
                  </p>
                  
                  <Button 
                    variant={isPriority ? "default" : "outline"} 
                    size="sm" 
                    className="w-full"
                  >
                    Take Action
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};