import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center mt-[20%] text-offWhite ">
      <h1>Diese Seite konnte leider nicht gefunden werden.</h1>
      <Button href="/" color="orange">
        Zur Startseite
      </Button>
    </div>
  );
}
