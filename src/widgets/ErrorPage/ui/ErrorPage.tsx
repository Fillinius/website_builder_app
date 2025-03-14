import { Button } from "@/shared/ui/button";

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {

    return (
        <div>
            <Button>Reload page</Button>
        </div>
    );
};
