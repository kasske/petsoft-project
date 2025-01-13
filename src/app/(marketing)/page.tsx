import Logo from "@/components/logo";
import Image from "next/image";
import previewImage from "../../assets/petsoft-preview.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex items-center justify-center gap-10 flex-col xl:flex-row ">
      <Image
        src={previewImage}
        alt="Preview of PetSoft"
        width={519}
        height={472}
      />

      <div>
        <Logo />
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use PetSoft to easily keep track of pets under your care. Get lifetime
          access for $299
        </p>

        <div className="mt-10 space-x-3">
          {/* shadcn buttons */}
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
