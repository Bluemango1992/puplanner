import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
        <SignIn
            appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
                },
            }}
        />
    </div>
    );
}

                   
                