import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default Loading;
