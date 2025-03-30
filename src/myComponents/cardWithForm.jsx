import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

 const  CardWithForm = ()=> {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Total de la facture</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div> */}
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </form>
        <div className="">
          <span>prix ttc :</span>
          <span className="text-lg font-bold ml-7"> 1000.00 €</span>
        </div>
        <div className="">
          <span>remise :</span>
          <span className="text-lg font-bold ml-7"> 0.00 €</span>
        </div>
        <div className="">
          <span>quantité :</span>
          <span className="text-lg font-bold ml-7">14</span>
        </div>
        <Separator className="my-4"/>
        <div className="">
          <span className="text-xl">total :</span>
          <span className="text-lg font-bold ml-7"> 1000.00 €</span>
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
export default CardWithForm;