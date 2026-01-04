import { ShoppingCartIcon, MenuIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import { Sheet, SheetContent, SheetTitle, SheetHeader, SheetTrigger } from './sheet';

export default function Header() {
    return (
        <Card className="flex flex-row justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle className="text-left text-lg">Menu</SheetTitle>
                    </SheetHeader>

                    <div className="mt-2 flex flex-col gap-3">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon size={16} />
                            Fazer Login
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon size={16} />
                            Início
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>

                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon size={16} />
                            Catalogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg">
                <span className="text-primary">FSW</span> Store
            </h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}
