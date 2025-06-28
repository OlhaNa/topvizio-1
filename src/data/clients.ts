import logoDobrobut from "../assets/logos/dobrobut.png";
import logoPivdenny from "../assets/logos/pivdenny.png";
import logoTransstone from "../assets/logos/transstone.png";
import logoDragonCapital from "../assets/logos/dragon-capital.png";
import logoConcorde from "../assets/logos/concorde.png";
import logoChestProfesiy from "../assets/logos/chest.png";

export interface Client {
  id: string; 
  name: string; 
  logo: string; 
  alt: string; 
  url?: string; 
}

export const clients: Client[] = [
  {
    id: "dobrobut",
    name: "Dobrobut Clinic",
    logo: logoDobrobut,
    alt: "Dobrobut medical network logo",
  },
  {
    id: "pivdenny",
    name: "Bank Pivdenny",
    logo: logoPivdenny,
    alt: "Bank Pivdenny logo",
  },
  {
    id: "transstone",
    name: "Transstone",
    logo: logoTransstone,
    alt: "Transstone logistics logo",
  },
  {
    id: "dragon-capital",
    name: "Dragon Capital",
    logo: logoDragonCapital,
    alt: "Dragon Capital investment logo",
  },
  {
    id: "concorde-capital",
    name: "Concorde Capital",
    logo: logoConcorde,
    alt: "Concorde Capital logo",
  },
  {
    id: "chest-profesiy",
    name: "Chest Profesii",
    logo: logoChestProfesiy,
    alt: "Chest Profesii foundation logo",
  },
];
