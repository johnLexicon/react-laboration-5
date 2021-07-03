const About = () => {
  return (
    <div>
      Du ska i denna laborationsuppgift göra följande: Den här veckan vill jag
      att du ska bygga en Admin sida som visar en lista på alla användare som
      finns på en sida. Användarna får du skapa själv och dessa ska lagras som
      object i en array i redux. Informationen som bör finnas på varje
      användarobjekt är: - Id - Förnamn - Efternamn - Email Jag vill även att du
      som administratör ska kunna logga in på sidan och som inloggad ska du ha
      valen att lägga till, ändra på och ta bort användare. Dessa möjligheter
      ska inte gå att komma åt om man inte är inloggad. Varje användare i listan
      måste ha en unik email adress och det ska inte gå att lägga till en
      användare om något av fälten är tomma. För dig som vill ha en större
      utmaning: (Detta är inte obligatoriskt) Här vill jag att du hämtar alla
      användare från en databas via ett api. Du får använda dig av vilken
      databas du vill (även json-server) Alla ändringar du gör på en användare
      skall göras på databasen också. För att lyckas med detta kommer du behöva
      använda dig av tillägg som redux thunk för att kunna returnera funktioner
      i dina actions.
    </div>
  );
};

export default About;
