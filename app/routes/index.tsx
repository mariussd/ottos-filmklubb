import magnus from "../images/DSCF1159.jpg";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <img src={magnus} alt="christian magnus" />
          <h1 className="text-2xl">Ottos filmklubb</h1>
          <p>
            Her kommer Oslos beste filmklubb. <br />
            Dette er dog ikke et bilde av Otto. <br />
            Det er et bilde av Magnus.
          </p>
        </div>
      </div>
    </main>
  );
}
