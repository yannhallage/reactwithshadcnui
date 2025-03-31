"use client"

import { useToast } from "@/hooks/use-toast.ts"
import { Input } from "@/components/ui/input.tsx";
import ScrollAreaDemo from "./ScrollAreaDemo";
import CardWithForm from "./cardWithForm";
import { Button } from "@/components/ui/button.tsx";
import { useContext, useEffect, useRef, useState } from "react";
import Toaster from '@/components/ui/toaster.tsx'
import { Context } from "../../context/apiContext";


const FormAchat = () => {
    const { addAchat, achats } = useContext(Context);
    const [variableAdd,setVariableAdd] = useState(0)
    const [placeholder] = useState({
        nameProduit: "Nom du produit",
        quantiteProduit: "Quantité",
        prixProduit: "Prix",
    });
    const { toast } = useToast()
    const [afficheToats, setAfficheToats] = useState(false)
    const [dataValue, setDataValue] = useState([])
    const [valeurTotal, setValeurTotal] = useState(0)

    const inputRef = useRef({});

    const handleClick = () => {

        const emptyFields = [];
        const values = Object.keys(placeholder).reduce((acc, key) => {
            const value = inputRef.current[key]?.value.trim(); // Trim pour éviter les espaces vides
            if (value) {
                acc[key] = value;
            } else {
                emptyFields.push(key);
            }
            return acc;
        }, {});

        if (emptyFields.length > 0) {
            setAfficheToats(true);
            toast({
                variant: "destructive",
                description: "Veuillez remplir tous les champs.",
            });
            EmptyFields()
            return;
        } 
        
        const valeurEnvoyers = {
            nameProduit: values.nameProduit,
            quantiteProduit: values.quantiteProduit,
            prixProduit: parseInt(values.prixProduit)
        }
    
        setDataValue([...dataValue, valeurEnvoyers])
        EmptyFields()   
    };

    const EmptyFields = () => {
        const values = Object.keys(placeholder).reduce((acc, key) => {
            const value = inputRef.current[key].value = ''
        }, {});
        return;
    }
    return (
        <section className="p-5">
            <div className="space-y-7">
                <span className="md:text-4xl text-xl font-bold">Achats d'article</span>
                {/* Formulaire */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 space-x-6">
                    <div className="space-y-3">
                        <div className="flex space-x-3">
                            {Object.entries(placeholder).map(([key, value]) => (
                                <Input
                                    key={key}
                                    placeholder={value}
                                    ref={(el) => (inputRef.current[key] = el)}
                                    name={key}
                                />
                            ))}
                            <Button onClick={handleClick}>Enregistrer</Button>
                        </div>
                        <div>
                            <ScrollAreaDemo
                                children={dataValue}
                            />
                        </div>
                    </div>
                    {/* Pagnets */}
                    <DivPagnet />
                </div>
                <div className="">
                    <Toaster />
                </div>
            </div>
        </section>
    );
};

const DivPagnet = () => {
    return (
        <div className="space-y-5">
            <div>
                <span className="text-xl font-bold">Pagnets</span>
            </div>
            <div>
                <CardWithForm />
            </div>
        </div>
    );
};

export default FormAchat;