import { useQuery } from "@tanstack/react-query";
import ContractorCard from "@/components/contractor-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Contractor } from "@shared/schema";

export default function Contractors() {
  const { data: contractors, isLoading } = useQuery<Contractor[]>({
    queryKey: ["/api/contractors"],
  });

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Local Contractors</h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[400px]" />
            ))
          : contractors?.map((contractor) => (
              <ContractorCard key={contractor.id} contractor={contractor} />
            ))}
      </div>
    </main>
  );
}
