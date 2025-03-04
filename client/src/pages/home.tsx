import Hero from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const benefits = [
    {
      title: "Fresh & Local",
      description: "Grow your own organic produce steps from your kitchen.",
    },
    {
      title: "Sustainable",
      description: "Reduce your carbon footprint with a productive home garden.",
    },
    {
      title: "Beautiful",
      description: "Create an edible landscape that's both functional and stunning.",
    },
    {
      title: "Educational",
      description: "Learn about gardening from experienced local professionals.",
    },
  ];

  return (
    <main>
      <Hero />
      
      <section className="py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Edible Landscaping?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
