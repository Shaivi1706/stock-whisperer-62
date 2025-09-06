import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Plus, Package } from "lucide-react";

export const AddInventoryForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    buyingPrice: "",
    sellingPrice: "",
    supplier: "",
    description: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.itemName || !formData.quantity || !formData.sellingPrice) {
      toast.error("Please fill in all required fields (Item Name, Quantity, Selling Price)");
      return;
    }

    // Add inventory record (this would normally save to database)
    console.log("Adding inventory record:", formData);
    toast.success("📦 Inventory record added successfully!");
    
    // Reset form
    setFormData({
      itemName: "",
      category: "",
      quantity: "",
      buyingPrice: "",
      sellingPrice: "",
      supplier: "",
      description: "",
      location: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Package className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">
          ➕ Add New Inventory Item
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item Name */}
          <div className="space-y-2">
            <Label htmlFor="itemName" className="text-foreground">
              Item Name *
            </Label>
            <Input
              id="itemName"
              placeholder="e.g., Denim Jeans - Blue"
              value={formData.itemName}
              onChange={(e) => handleInputChange("itemName", e.target.value)}
              className="bg-background/50"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-foreground">
              Category
            </Label>
            <Select onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">👕 Clothing</SelectItem>
                <SelectItem value="electronics">📱 Electronics</SelectItem>
                <SelectItem value="accessories">👜 Accessories</SelectItem>
                <SelectItem value="home">🏠 Home & Garden</SelectItem>
                <SelectItem value="books">📚 Books</SelectItem>
                <SelectItem value="sports">⚽ Sports</SelectItem>
                <SelectItem value="other">📦 Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-foreground">
              Quantity *
            </Label>
            <Input
              id="quantity"
              type="number"
              placeholder="e.g., 50"
              value={formData.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
              className="bg-background/50"
            />
          </div>

          {/* Buying Price */}
          <div className="space-y-2">
            <Label htmlFor="buyingPrice" className="text-foreground">
              Buying Price (Rs)
            </Label>
            <Input
              id="buyingPrice"
              type="number"
              placeholder="e.g., 800"
              value={formData.buyingPrice}
              onChange={(e) => handleInputChange("buyingPrice", e.target.value)}
              className="bg-background/50"
            />
          </div>

          {/* Selling Price */}
          <div className="space-y-2">
            <Label htmlFor="sellingPrice" className="text-foreground">
              Selling Price (Rs) *
            </Label>
            <Input
              id="sellingPrice"
              type="number"
              placeholder="e.g., 1200"
              value={formData.sellingPrice}
              onChange={(e) => handleInputChange("sellingPrice", e.target.value)}
              className="bg-background/50"
            />
          </div>

          {/* Supplier */}
          <div className="space-y-2">
            <Label htmlFor="supplier" className="text-foreground">
              Supplier
            </Label>
            <Input
              id="supplier"
              placeholder="e.g., Fashion Hub Pvt Ltd"
              value={formData.supplier}
              onChange={(e) => handleInputChange("supplier", e.target.value)}
              className="bg-background/50"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-foreground">
              Storage Location
            </Label>
            <Input
              id="location"
              placeholder="e.g., Warehouse A - Shelf 12"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="bg-background/50"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-foreground">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Additional details about the item..."
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            className="bg-background/50 min-h-[80px]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button 
            type="submit"
            className="bg-gradient-primary hover:shadow-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Inventory Item
          </Button>
        </div>
      </form>
    </Card>
  );
};