"use client";

import { useEffect, useState } from "react";

export default function DatenschutzPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".legal-section"));

    const root =
      window.innerWidth < 1100
        ? document.querySelector(".scroll-container")
        : null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root,
        threshold: 0.12,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer =
      window.innerWidth < 1100
        ? document.querySelector(".scroll-container")
        : null;
    const scrollTarget = scrollContainer || window;

    const getScrollTop = () =>
      scrollContainer ? scrollContainer.scrollTop : window.scrollY;

    const handleScroll = () => {
      setShowBackToTop(getScrollTop() > 600);
    };

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => scrollTarget.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    const scrollContainer =
      window.innerWidth < 1100
        ? document.querySelector(".scroll-container")
        : null;

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="legal-page" id="top">
      <section className="legal-hero">
        <div className="legal-hero__inner">
          <h1 className="legal-hero__title">Datenschutzerklärung</h1>
        </div>
      </section>

      <div className="legal-content">
        <div className="legal-layout">
          <article className="legal-article" aria-label="Datenschutzerklärung">
            <section id="warnhinweis" className="legal-section">
              <h2 className="legal-heading">1 Warnhinweis zu Inhalten</h2>
              <p>
                Die kostenlosen und frei zugänglichen Inhalte dieser Webseite
                wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser
                Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und
                Aktualität der bereitgestellten kostenlosen und frei
                zugänglichen journalistischen Ratgeber und Nachrichten.
                Namentlich gekennzeichnete Beiträge geben die Meinung des
                jeweiligen Autors und nicht immer die Meinung des Anbieters
                wieder. Allein durch den Aufruf der kostenlosen und frei
                zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen
                dem Nutzer und dem Anbieter zustande, insoweit fehlt es am
                Rechtsbindungswillen des Anbieters.
              </p>
            </section>

            <section id="externe-links" className="legal-section">
              <h2 className="legal-heading">2 Externe Links</h2>
              <p>
                Diese Website enthält Verknüpfungen zu Websites Dritter
                („externe Links“). Diese Websites unterliegen der Haftung der
                jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen
                Verknüpfung der externen Links die fremden Inhalte daraufhin
                überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt
                waren keine Rechtsverstöße ersichtlich. Der Anbieter hat
                keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung
                und auf die Inhalte der verknüpften Seiten. Das Setzen von
                externen Links bedeutet nicht, dass sich der Anbieter die hinter
                dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine
                ständige Kontrolle der externen Links ist für den Anbieter ohne
                konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei
                Kenntnis von Rechtsverstößen werden jedoch derartige externe
                Links unverzüglich gelöscht.
              </p>
            </section>

            <section id="urheberrecht" className="legal-section">
              <h2 className="legal-heading">
                3 Urheber- und Leistungsschutzrechte
              </h2>
              <p>
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem
                deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
                Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
                bedarf der vorherigen schriftlichen Zustimmung des Anbieters
                oder jeweiligen Rechteinhabers. Dies gilt insbesondere für
                Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
                Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
                anderen elektronischen Medien und Systemen. Inhalte und Rechte
                Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
                Vervielfältigung oder Weitergabe einzelner Inhalte oder
                kompletter Seiten ist nicht gestattet und strafbar. Lediglich
                die Herstellung von Kopien und Downloads für den persönlichen,
                privaten und nicht kommerziellen Gebrauch ist erlaubt.
              </p>
              <p>
                Die Darstellung dieser Website in fremden Frames ist nur mit
                schriftlicher Erlaubnis zulässig.
              </p>
            </section>

            <section id="nutzungsbedingungen" className="legal-section">
              <h2 className="legal-heading">4 Besondere Nutzungsbedingungen</h2>
              <p>
                Soweit besondere Bedingungen für einzelne Nutzungen dieser
                Website von den vorgenannten Paragraphen abweichen, wird an
                entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem
                Falle gelten im jeweiligen Einzelfall die besonderen
                Nutzungsbedingungen.
              </p>
              <p>Quelle: Impressum-recht.de</p>
            </section>

            <section id="datenschutz" className="legal-section">
              <h2 className="legal-heading">Datenschutzerklärung:</h2>
              <h3 className="legal-subheading">Datenschutz</h3>
              <p>
                Nachfolgend möchten wir Sie über unsere Datenschutzerklärung
                informieren. Sie finden hier Informationen über die Erhebung und
                Verwendung persönlicher Daten bei der Nutzung unserer Webseite.
                Wir beachten dabei das für Deutschland geltende
                Datenschutzrecht. Sie können diese Erklärung jederzeit auf
                unserer Webseite abrufen.
              </p>
              <p>
                Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im
                Internet (z.B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff
                durch Dritte geschützt werden kann.
              </p>
              <p>
                Die Verwendung der Kontaktdaten unseres Impressums zur
                gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei
                denn wir hatten zuvor unsere schriftliche Einwilligung erteilt
                oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter
                und alle auf dieser Website genannten Personen widersprechen
                hiermit jeder kommerziellen Verwendung und Weitergabe ihrer
                Daten.
              </p>
            </section>

            <section id="personenbezogene-daten" className="legal-section">
              <h2 className="legal-heading">Personenbezogene Daten</h2>
              <p>
                Sie können unsere Webseite ohne Angabe personenbezogener Daten
                besuchen. Soweit auf unseren Seiten personenbezogene Daten (wie
                Name, Anschrift oder E-Mail Adresse) erhoben werden, erfolgt
                dies, soweit möglich, auf freiwilliger Basis. Diese Daten werden
                ohne Ihre ausdrückliche Zustimmung nicht an Dritte
                weitergegeben. Sofern zwischen Ihnen und uns ein
                Vertragsverhältnis begründet, inhaltlich ausgestaltet oder
                geändert werden soll oder Sie an uns eine Anfrage stellen,
                erheben und verwenden wir personenbezogene Daten von Ihnen,
                soweit dies zu diesen Zwecken erforderlich ist (Bestandsdaten).
                Wir erheben, verarbeiten und nutzen personenbezogene Daten
                soweit dies erforderlich ist, um Ihnen die Inanspruchnahme des
                Webangebots zu ermöglichen (Nutzungsdaten). Sämtliche
                personenbezogenen Daten werden nur solange gespeichert wie dies
                für den geannten Zweck (Bearbeitung Ihrer Anfrage oder
                Abwicklung eines Vertrags) erforderlich ist. Hierbei werden
                steuer- und handelsrechtliche Aufbewahrungsfristen
                berücksichtigt. Auf Anordnung der zuständigen Stellen dürfen wir
                im Einzelfall Auskunft über diese Daten (Bestandsdaten)
                erteilen, soweit dies für Zwecke der Strafverfolgung, zur
                Gefahrenabwehr, zur Erfüllung der gesetzlichen Aufgaben der
                Verfassungsschutzbehörden oder des Militärischen
                Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen
                Eigentum erforderlich ist.
              </p>
            </section>

            <section id="google-analytics" className="legal-section">
              <h2 className="legal-heading">
                Datenschutzerklärung für den Webanalysedienst Google Analytics
              </h2>
              <p>
                Diese Website benutzt Google Analytics, einen Webanalysedienst
                der Google Inc. („Google“). Google Analytics verwendet sog.
                „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
                werden und die eine Analyse der Benutzung der Website durch Sie
                ermöglichen. Die durch den Cookie erzeugten Informationen über
                Ihre Benutzung dieser Website werden in der Regel an einen
                Server von Google in den USA übertragen und dort gespeichert.
                Wir haben die IP-Anonymisierung aktiviert. Auf dieser Webseite
                wird Ihre IP-Adresse von Google daher innerhalb von
                Mitgliedstaaten der Europäischen Union oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
                volle IP-Adresse an einen Server von Google in den USA
                übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
                Website wird Google diese Informationen benutzen, um Ihre
                Nutzung der Website auszuwerten, um Reports über die
                Websiteaktivitäten zusammenzustellen und um weitere mit der
                Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
                Die im Rahmen von Google Analytics von Ihrem Browser
                übermittelte IP-Adresse wird nicht mit anderen Daten von Google
                zusammengeführt. Sie können die Speicherung der Cookies durch
                eine entsprechende Einstellung Ihrer Browser-Software
                verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
                Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich werden nutzen können. Sie können darüber hinaus
                die Erfassung der durch das Cookie erzeugten und auf Ihre
                Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
                Google sowie die Verarbeitung dieser Daten durch Google
                verhindern, indem sie das unter dem folgenden Link verfügbare
                Browser-Plugin herunterladen und installieren:
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
            </section>

            <section id="google-plus" className="legal-section">
              <h2 className="legal-heading">
                Datenschutzerklärung für das soziale Netzwerk Google Plus
              </h2>
              <p>
                Diese Webseite verwendet die sog. „G +1“-Schaltfläche des
                sozialen Netzwerkes Google Plus, welches von der Google Inc.,
                1600 Amphitheatre Parkway, Mountain View, CA 94043, United
                States betrieben wird („Google“). Die Schaltfläche ist an dem
                Zeichen „G +1“ zu erkennen. Wenn Sie bei Google Plus registriert
                sind, können Sie mit der „G +1“ Schaltfläche Ihr Interesse an
                unserer Webseite ausdrücken und Inhalte von unserer Webseite auf
                Google Plus teilen. In dem Falle speichert Google sowohl die
                Information, dass Sie für einen unserer Inhalte ein „G +1“
                gegeben haben, als auch Informationen über die Seite, die Sie
                dabei angesehen haben. Ihre „G +1“ können möglicherweise
                zusammen mit Ihrem Namen (ggf. auch mit Foto – soweit vorhanden)
                bei Google Plus in weiteren Google-Diensten, wie der Google
                Suche oder Ihrem Google-Profil, eingeblendet werden.
                <br />
                Zweck und Umfang der Datenerhebung und die weitere Verarbeitung
                und Nutzung der Daten durch Google sowie Ihre diesbezüglichen
                Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer
                Privatsphäre entnehmen Sie bitte Googles Datenschutzhinweisen:
                <a
                  href="https://www.google.com/intl/de/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.com/intl/de/policies/privacy/
                </a>
              </p>
            </section>

            <section id="google-maps" className="legal-section">
              <h2 className="legal-heading">
                Datenschutzerklärung für Google Maps von Google Inc.
              </h2>
              <p>
                Diese Website verwendet die „Google Maps und Routenplaner“-
                Funktion der Google Inc., 1600 Amphitheatre Parkway, Mountain
                View, CA 94043, United States („Google“), um geographische
                Informationen und Anfahrtrouten darzustellen bzw. zu berechnen.
                Durch Google Maps können Daten über Ihre Nutzung dieser Webseite
                an Google übertragen, erhoben und von Google genutzt werden. Sie
                können eine solche Datenübertragung verhindern, wenn Sie in
                Ihrem Browser „Javascript“ deaktivieren. In dem Falle können
                aber keine Karten angezeigt werden. Durch die Nutzung dieser
                Webseite und die Nichtdeaktivierung von „Javascript“ erklären
                Sie Ihr Einverständnis, dass Sie mit der Bearbeitung Ihrer Daten
                durch Google zum obigen Zwecke einverstanden sind. Weitere
                Informationen darüber wie „Google Maps“ und der Routenplaner
                Ihre Daten verwenden sowie die Datenschutzerklärung von Google
                finden Sie unter:
                <a
                  href="https://www.google.com/intl/de_de/help/terms_maps.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.com/intl/de_de/help/terms_maps.html
                </a>
              </p>
            </section>

            <section id="google-remarketing" className="legal-section">
              <h2 className="legal-heading">
                Datenschutzerklärung für die „Google Remarketing“ und „Ähnliche
                Zielgruppen“-Funktion der Google Inc.
              </h2>
              <p>
                Diese Website verwendet die Remarketing- bzw. „Ähnliche
                Zielgruppen“-Funktion der Google Inc., 1600 Amphitheatre
                Parkway, Mountain View, CA 94043, United States („Google“). Sie
                können so zielgerichtet mit Werbung angesprochen werden, indem
                personalisierte und interessenbezogene Anzeigen geschaltet
                werden, wenn Sie andere Webseiten im sog. „Google
                Display-Netzwerk“ besuchen. „Google Remarketing“ bzw. die
                Funktion „Ähnliche Zielgruppen“ verwendet dafür sog. „Cookies“,
                Textdateien, die auf Ihrem Computer gespeichert werden und die
                eine Analyse der Benutzung der Website durch Sie ermöglichen.
                Über diese Textdateien werden Ihre Besuche sowie anonymisierte
                Daten über die Nutzung der Website erfasst. Personenbezogene
                Daten werden dabei nicht gespeichert. Besuchen Sie eine andere
                Webseite im sog. „Google Display-Netzwerk“ werden Ihnen ggf.
                Werbeeinblendungen angezeigt, die mit hoher Wahrscheinlichkeit
                zuvor auf unserer Website aufgerufene Produkt- und
                Informationsbereiche berücksichtigen.
              </p>
              <p>
                Sie können das „Google Remarketing“ bzw. die „Ähnliche
                Zielgruppen“-Funktion verhindern, indem Sie die Speicherung der
                Cookies durch eine entsprechende Einstellung Ihrer
                Browser-Software unterbinden. Wir weisen Sie jedoch darauf hin,
                dass Sie in diesem Fall gegebenenfalls nicht sämtliche
                Funktionen dieser Website vollumfänglich werden nutzen können.
                Sie können darüber hinaus die Erfassung der durch das Cookie
                erzeugten und auf Ihre Nutzung der Website bezogenen Daten an
                Google sowie die Verarbeitung dieser Daten durch Google
                verhindern, indem sie das unter dem folgenden Link verfügbare
                Browser-Plugin herunterladen und installieren:
                <a
                  href="https://www.google.com/settings/ads/plugin?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.com/settings/ads/plugin?hl=de
                </a>
                . Sie können zudem die Verwendung von Cookies durch
                Drittanbieter deaktivieren, indem sie die Deaktivierungsseite
                der Netzwerkwerbeinitiative (Network Advertising Initiative)
                unter
                <a
                  href="https://www.networkadvertising.org/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.networkadvertising.org/choices/
                </a>
                aufrufen und die dort genannten weiterführenden Information zum
                Opt-Out umsetzen. Die Datenschutzerklärung von Google zum
                Remarketing mit weiteren Informationen finden Sie hier:
                <a
                  href="https://www.google.com/privacy/ads/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.com/privacy/ads/
                </a>
                .
              </p>
            </section>

            <section id="google-adwords" className="legal-section">
              <h2 className="legal-heading">
                Datenschutzerklärung für das „Google AdWords
                Conversion-Tracking“ von Google Inc.
              </h2>
              <p>
                Diese Website verwendet die „Google AdWords
                Conversion-Tracking“- Funktion der Google Inc., 1600
                Amphitheatre Parkway, Mountain View, CA 94043, United States
                („Google“). Google AdWords Conversion-Tracking verwendet sog.
                „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
                werden und die eine Analyse der Benutzung der Website durch Sie
                ermöglichen, wenn Sie auf eine Google-Anzeige gekickt haben. Die
                Cookies sind maximal 90 Tagen gültig. Personenbezogene Daten
                werden dabei nicht gespeichert. Solange das Cookie gültig ist,
                können Google und wir als Webseitenbetreiber erkennen, dass Sie
                eine Anzeige geklickt haben und zu einer bestimmten Zielseite
                (z.B. Bestellbestätigungsseite, Newsletteranmeldung) gelangt
                sind. Diese Cookies können nicht über mehrere Websites von
                verschiedenen AdWords-Teilnehmern nachverfolgt werden können.
                Durch das Cookie werden in „Google AdWords“
                Conversion-Statistiken erstellt. In diesen Statistiken wird die
                Anzahl der Nutzer, die auf eine unserer Anzeige geklickt haben,
                erfasst. Zudem wird gezählt, wie viele Nutzer zu einer
                Zielseite, die mit einem „Conversion-Tag“ versehen worden ist,
                gelangt sind. Die Statistiken enthalten jedoch keine Daten, mit
                denen Sie sich identifizieren lassen.
              </p>
              <p>
                Das Speichern von Cookies auf Ihrer Festplatte können Sie
                verhindern, indem Sie in Ihren Browser-Einstellungen „keine
                Cookies akzeptieren“ wählen (Im MS Internet-Explorer unter
                „Extras &gt; Internetoptionen &gt; Datenschutz &gt;
                Einstellung“; im Firefox unter „Extras &gt; Einstellungen &gt;
                Datenschutz &gt; Cookies“); wir weisen Sie jedoch darauf hin,
                dass Sie in diesem Fall gegebenenfalls nicht sämtliche
                Funktionen dieser Website voll umfänglich nutzen können. Durch
                die Nutzung dieser Website erklären Sie sich mit der Bearbeitung
                der über Sie erhobenen Daten durch Google in der zuvor
                beschriebenen Art und Weise und zu dem zuvor benannten Zweck
                einverstanden. Weitere Informationen darüber wie Google
                Conversion-Daten verwendet sowie die Datenschutzerklärung von
                Google finden Sie unter:
                <a
                  href="https://support.google.com/adwords/answer/93148?ctx=tltp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.google.com/adwords/answer/93148?ctx=tltp
                </a>
                ,
                <a
                  href="https://www.google.de/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.google.de/policies/privacy/
                </a>
              </p>
            </section>

            <section id="auskunftsrecht" className="legal-section">
              <h2 className="legal-heading">Auskunftsrecht</h2>
              <p>
                Sie haben das jederzeitige Recht, sich unentgeltlich und
                unverzüglich über die zu Ihrer Person erhobenen Daten zu
                erkundigen. Sie haben das jederzeitige Recht, Ihre Zustimmung
                zur Verwendung Ihrer angegeben persönlichen Daten mit Wirkung
                für die Zukunft zu widerrufen. Zur Auskunftserteilung wenden Sie
                sich bitte an den Anbieter unter den Kontaktdaten im Impressum.
              </p>
              <p>Quelle: www.impressum-recht.de</p>
            </section>
          </article>
        </div>
      </div>

      <button
        className={`legal-backtotop${showBackToTop ? " is-visible" : ""}`}
        onClick={handleBackToTop}
        type="button"
        aria-label="Zurück nach oben"
      >
        ↑ Nach oben
      </button>
    </div>
  );
}
