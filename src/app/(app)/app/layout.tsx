import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-header";
import PetContextProvider from "@/contexts/pet-context-provider";
import { Pet } from "@/lib/types";

/* layout that works for app route and nested routes inside */

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pets");
  }

  const data: Pet[] = await response.json();

  return (
    <>
      <BackgroundPattern />

      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />

        <PetContextProvider data={data}>{children}</PetContextProvider>

        <AppFooter />
      </div>
    </>
  );
}
