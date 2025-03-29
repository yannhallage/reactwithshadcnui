import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"

import { Separator } from "@/components/ui/separator"
import TooltipDemo from "./TooltipDemo"
import DialogDemo from "./DialogDemo"
import AlertDialogDemo from "./AlertDialogDemo"


const tags = Array.from({ length: 10 }).map(
    (_, i, a) => <span className="">{`produit prix quantité ${a.length - i}`}</span>
)

const ScrollAreaDemo = () => {


    return (
        <ScrollArea className="h-72 w-full rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                    <>
                        <div key={tag} className="text-sm">
                            <div className="flex">
                                <span className="mr-2">{tag}</span>
                                <span>
                                    <DialogDemo />
                                </span>
                            </div>
                            <span className="float-end text-[14px] cursor-pointer" >
                                <AlertDialogDemo />
                            </span>
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    )
}

export default ScrollAreaDemo;