import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mt-[20%] flex flex-col items-center justify-center space-y-10 p-10 text-center text-offWhite">
      <h1>Diese Seite konnte leider nicht gefunden werden.</h1>
      <Button href="/" color="orange">
        Zur Startseite
      </Button>
    </div>
  );
}
