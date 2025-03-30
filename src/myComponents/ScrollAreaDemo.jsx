import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import TooltipDemo from "./TooltipDemo";
import DialogDemo from "./DialogDemo";
import AlertDialogDemo from "./AlertDialogDemo";

const tags = Array.from({ length: 10 }, (_, i) => `Produit Prix Quantité ${10 - i}`);

const ScrollAreaDemo = () => {
  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <div className="text-sm flex justify-between items-center">
              <span className="mr-2">{tag}</span>
              <div className="flex space-x-2">
                <DialogDemo />
                <AlertDialogDemo />
              </div>
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ScrollAreaDemo;
