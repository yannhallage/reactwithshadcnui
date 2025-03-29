import { Input } from "@/components/ui/input.tsx";
import ScrollAreaDemo from './ScrollAreaDemo'
import CardWithForm from './cardWithForm'
import { Button } from '@/components/ui/button.tsx'
import { useEffect, useState } from "react";

const FormAchat = () => {
    const [placeholder, setPlaceholder] = useState({
        namePrduit: 'Nom du produit',
        QuantitéProduit: 'Quantité',
        Price: 'Prix',
    });


    return (
        <section className='p-5'>
            <div className="space-y-7">
                <span className="md:text-4xl text-xl font-bold">
                    Achats d'article
                </span>

                {/* form  */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 space-x-6">
                    <div className="space-y-3">
                        <div className="flex space-x-3">
                            {Object.entries(placeholder).map(([key, value]) => (
                                <Input key={key} placeholder={value} />
                            ))}
                            <Button
                            >
                                Enregistrer
                            </Button>
                        </div>
                        <div className="">
                            <ScrollAreaDemo />
                        </div>
                    </div>
                    {/* pagnets */}

                    <div className="">
                        <DivPagnet />
                    </div>
                </div>
            </div>
        </section>
    )
}


// pagnets 

const DivPagnet = () => {
    return (
        <>
            <div className="space-y-5">
                <div className="">
                    <span className="text-xl font-bold">Pagnets</span>
                </div>
                <div className="">
                    <div className="">
                        <CardWithForm />
                    </div>
                </div>
            </div>
        </>
    )
}
export default FormAchat;
