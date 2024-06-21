
import { usePathname } from "next/navigation";

export default function CurretnPath(path: string){

  const pathName = usePathname();

  return pathName === path ?  true : false;
}