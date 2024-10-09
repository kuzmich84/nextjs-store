import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function HomePage() {
  return (
    <>
      <h1 className="text-3xl">HomePage</h1>
      <Input type="email" placeholder="Email" />
      <Button variant="outline" size="lg" className="capitalize m-8">
        Click Me
      </Button>
    </>
  );
}
export default HomePage;
