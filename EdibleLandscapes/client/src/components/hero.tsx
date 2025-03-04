import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Transform Your Yard into an Edible Paradise
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect with local landscaping experts who specialize in creating beautiful, productive gardens. Turn your outdoor space into a sustainable source of fresh, homegrown food.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/quote">
              <Button size="lg">Get Started Today</Button>
            </Link>
            <Link href="/contractors">
              <Button variant="outline" size="lg">
                Find Contractors
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
