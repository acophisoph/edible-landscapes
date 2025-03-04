import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { Contractor } from "@shared/schema";

interface ContractorCardProps {
  contractor: Contractor;
}

export default function ContractorCard({ contractor }: ContractorCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={contractor.imageUrl}
          alt={contractor.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="flex-row items-center justify-between">
        <h3 className="text-lg font-semibold">{contractor.name}</h3>
        <div className="flex items-center">
          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{contractor.rating}/5</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{contractor.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {contractor.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
