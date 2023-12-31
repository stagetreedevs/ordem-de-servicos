import { useState } from "react";
import Charts from "../../components/Charts";
import HeaderDashboard from "../../components/HeaderDashboard";
import "./style.css"
import "./responsive.css"
import CardResumo from "../../components/CardResumo";
import CardAnalysis from "../../components/CardsAnalysis"

export default function Financeiro() {

    
  const [ordem, setOrdem] = useState({
    name: "",
    totalService: "0",
    valorTotalPago: "0",
    valorTotalPendente: "0"
  })

    return (
        <section className="sectionFinanceiro">

            <HeaderDashboard setVisible={() => setVisible(!visible)}/>

            <div className="conteinerFinanceiro">
                <div>
                    <h2 className="titleResumoFinanceiro">Financeiro</h2>
                    {/* <CardResumo totalMesPago={ordem.valorTotalPago} totalMesPendente={ordem.valorTotalPendente} totalServicos={ordem.totalService}/> */}
                    <CardAnalysis totalServices={ordem.totalService} totalPago={ordem.valorTotalPago} totalPendente={ordem.valorTotalPendente}/>
                </div>
                
                <Charts setMonth={(param) => setOrdem(param)}/>
                
            </div>

            
        </section>
    )
    
}