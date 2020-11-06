<!-- 
  MUSS NOCH ANGEPASST WERDEN!

  <p align="center">
  <a href="" rel="noopener">
  <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
  </p> 

-->

<h1 align="center">Xbox iOS Widgets with Scriptable</h1>

<div align="center">

![Twitter Follow](https://img.shields.io/twitter/follow/InsideXboxDE?style=social) 
![GitHub Repo stars](https://img.shields.io/github/stars/gnrmarcel/scriptable-xbox-gamercard?style=social)

</div>

---

<p align="center"> Lasst euch mit Hilfe von Scriptable eure eigene Xbox Gamercard oder euer letztes freigespieltes Xbox Achievements in einem iOS Widget anzeigen
    <br> 
</p>

## Xbox Widgets
- xbox-gamercard.js = zeigt euer Xbox Profil an
- xbox-achievements.js = zeigt euer letztes freigespieltes Xbox Achievement an


## Voraussetzungen

- iPhone mit iOS14 oder höher
- Scriptable App für iOS - [Link](https://apps.apple.com/de/app/scriptable/id1405459188)
- Xbox Api Konto - [Link](https://xapi.us)

## Installation und Konfiguration

1. Installiert euch die Scriptable App für iOS auf eurem iPhone
2. Erstellt euch ein Xbox Api Konto
3. Ersetzt die xxx mit folgende Informationen in der xbox-gamercard.js
    ```
    const apiToken = 'xxx'
    
    const xboxProfileUserID = 'xxx' 
    ```
   apiToken = Api Key von https://xapi.us/profile <br>
   xboxProfileUserID = XBOX Profile User ID von https://xapi.us/profile

### Xbox Gamercard

1. Hintergrundbild definieren
    ```
    const backgroundImage = 'xxx'
    ```
    Das Bild muss für ein "Medium" Widget folgende Maße besitzen: 640x293px und sollte nicht mehr als 30-50kb groß sein.
    Also Beispielbild könnt Ihr gerne unsere InsideXbox.de Datei "xbox-series-x-background-widget.jpg" nutzen, die wir euch als Beispiel in der Variable "backgroundImage" hinterlegt haben.

### Xbox Achievements

Aktuell müsst Ihr hier nur alles das umsetzen, was unter Voraussetzungen bzw. "Installation und Konfiguration" beschrieben ist.

## Ideen und Anregungen

Habt Ihr weitere Ideen, wie man das Xbox Gamercard Widget noch besser machen kann, dann lasst es uns wissen! Meldet euch einfach bei mir auf Twitter @gnrmarcel oder @InsideXbox.de

## Changelog

![Commits](https://github.com/gnrmarcel/scriptable-xbox/commits/main)

## Besucht uns
[InsideXbox.de @ Web](https://www.insidexbox.de) <br>
[InsideXbox.de @ Twitter](https://twitter.com/insidexboxde) <br>
[InsideXbox.de @ Facebook](https://facebook.com/insidexboxde) <br>
[Xbox Series X|S Germany 🇩🇪  Facebook Gruppe](https://www.facebook.com/groups/xboxseriesxsgermany) <br>

## Beispiel iOS Xbox Gamercard Widget

<p align="center">
  <a href="http://www.insidexbox.de" rel="noopener" target="_blank">
  <img src="https://raw.githubusercontent.com/gnrmarcel/scriptable-xbox-gamercard/main/xbox-gamercard-beispiel.jpeg" alt="Beispiel iOS Xbox Gamercard Widget"></a>
</p>