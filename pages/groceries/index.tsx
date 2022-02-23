import ContentList from "../../components/listContent/listContent";
import NavigationBar from "../../components/NavBar/NavigationBar";
import { PrismaClient } from '@prisma/client';
import BackDrop from "../../components/modalWindow/backDrop";
import ModalWindow from "../../components/modalWindow/modalWindow";

const prisma = new PrismaClient;

function GroceryPage(props : any){
    return (
        <div className="bg-gray-400">
            <BackDrop />
            <NavigationBar />
            <ContentList foods={props.foods}/>
            <ModalWindow />
        </div>
        );
}

export async function getServerSideProps(){
    const getFood = await prisma.groceries.findMany({
            include: {
                Shop: true
            }
          }
    );
    return { 
        props : {
            foods: getFood
        }
    }
  }

export default GroceryPage;
