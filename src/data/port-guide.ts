import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Palma Cruise Port Guide",
  subtitle:
    "Berths, shuttles, historic Palma, food, transport and sensible return-to-ship planning.",
  notice:
    "Cruise berth, shuttle and transport arrangements can change. Check your cruise line’s latest information before leaving the ship.",
  terminals: [
    {
      name: "West harbour cruise berths",
      quay: "Commercial port area west of Palma’s old town and cathedral waterfront",
      usedBy: "Most large cruise ships calling at Palma de Mallorca",
      cityAccess:
        "Depending on the berth, the cathedral and historic centre may be a waterfront walk or a short shuttle or taxi ride — confirm arrangements for your sailing",
    },
    {
      name: "Closer waterfront positions",
      quay: "Selected berths nearer the historic waterfront when assigned",
      usedBy: "Occasional calls when a nearer berth is available",
      cityAccess:
        "Can place Parc de la Mar and the cathedral quarter within a more comfortable walking range; still verify shuttle needs on the day",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Palma",
      paragraphs: [
        "Cruise ships calling at Palma de Mallorca use the commercial port area west of the old town. The exact distance to the cathedral and historic centre depends on the berth assigned for your sailing.",
        "Some passengers enjoy a waterfront stroll into the city; others need a shuttle or taxi for the first section. Treat published walking times as approximate and confirm signs, daily programmes and cruise-line notices on arrival.",
        "Palma is an excellent city-port for a cathedral and old-town day. Sóller, Valldemossa, the Tramuntana Mountains and the Caves of Drach are island journeys that need different timing and return planning.",
      ],
    },
    {
      heading: "Berths, shuttles and city access",
      paragraphs: [
        "Berth assignments and shuttle operations can change by ship, season and harbour logistics. Do not assume yesterday’s arrangement applies to your call.",
        "If a shuttle is offered, note the pickup point for your return as carefully as the outbound stop. Independent taxis are commonly available when ships are in port; agree the destination clearly — “Palma port” covers more than one access point.",
        "Cruise berth, shuttle and transport arrangements can change. Check your cruise line’s latest information before leaving the ship.",
      ],
    },
    {
      heading: "Walking into historic Palma",
      paragraphs: [
        "When your berth allows walking, the waterfront approach towards Parc de la Mar and Palma Cathedral (La Seu) is one of the Mediterranean’s most memorable port arrivals.",
        "From the cathedral area, the old town fans inland through lanes, courtyards and squares. Wear comfortable shoes — historic paving is uneven and some approaches include slopes.",
        "On hot days, or when the ship is berthed farther out, a shuttle or taxi for the first or last stretch often preserves energy for the city itself.",
      ],
    },
    {
      heading: "What you can explore independently",
      paragraphs: [
        "Palma Cathedral, Parc de la Mar, the old town, Mercat de l’Olivar and stretches of the waterfront are realistic independent goals when berth logistics are clear and you keep a generous terminal buffer.",
        "Bellver Castle sits above the city and adds travel and climbing; include it only on a longer call with a taxi or bus plan.",
        "Mountain villages, cave visits and multi-transport island circuits are usually better as organised excursions because road timing and meeting points matter more.",
      ],
    },
    {
      heading: "When an organised excursion makes sense",
      paragraphs: [
        "Book an organised tour when you want Sóller, Valldemossa, the historic railway, the Caves of Drach or a private island day with clear cruise-aware routing.",
        "Organised transport does not remove your responsibility to follow all-aboard time. Read inclusions carefully — entrance fees, train tickets and food are only included when stated.",
        "If your usable hours ashore are short, stay in Palma rather than forcing a long island circuit.",
      ],
    },
    {
      heading: "Markets, food and local flavour",
      paragraphs: [
        "Mercat de l’Olivar is a useful central introduction to Mallorcan produce, seafood and pastry culture. Morning visits usually work best.",
        "Look for ensaimadas, savoury snacks and seasonal market produce rather than treating lunch as a long tasting menu on a tight port day.",
        "Keep the final hour ashore close to your known return route so a café stop does not threaten the ship buffer.",
      ],
    },
    {
      heading: "Heat, footwear and mobility",
      paragraphs: [
        "Mallorca summers are hot and bright. Carry water, sun protection and a light layer for breezy waterfront or mountain stops.",
        "Cobbles, cathedral approaches and village streets reward proper walking shoes. Sandals without grip are a common mistake.",
        "Accessibility varies widely: flat promenade sections can be manageable, while old-town gradients, castle approaches and cave pathways are not universally suitable. Discuss needs before booking any organised tour.",
      ],
    },
    {
      heading: "Season, language and currency",
      paragraphs: [
        "Palma receives ships across the year, with busy Mediterranean seasons in spring and autumn. Summer heat and peak queues change the feel of a city day even when sailing times look similar.",
        "Spain uses the euro. Catalan and Spanish are widely used locally; English is commonly understood in visitor areas. Cards are widespread, but a little cash remains useful for markets and small cafés.",
        "Travel considerately in residential lanes and village streets — Palma and Mallorca are living places, not open-air museums.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm the ship’s all-aboard time, which is earlier than the published departure. For a city day, plan to reach the terminal 60–90 minutes before all-aboard.",
        "For Sóller, Valldemossa, caves or train–tram–boat circuits, the operator should plan backwards from the ship with traffic and mountain-road contingency. A map-app journey time is not an adequate return plan.",
        "Independent travellers are responsible for reaching the ship. If an island idea does not leave a conservative margin, choose Palma instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Palma from the cruise terminal?",
      answer:
        "Sometimes yes, sometimes not comfortably. It depends on your berth. Confirm walking versus shuttle arrangements on arrival rather than relying on a generic estimate.",
    },
    {
      question: "What can I see close to Palma cruise port?",
      answer:
        "Palma Cathedral, Parc de la Mar, the old town, markets and waterfront promenades are the strongest nearby goals when access is clear.",
    },
    {
      question: "Do I need a tour to see Sóller?",
      answer:
        "Independent travel is possible for experienced travellers, but organised excursions usually make cruise-day timing clearer for villages and multi-stop island routes.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger contingency after island excursions.",
    },
    {
      question: "Can berth and shuttle arrangements change?",
      answer:
        "Yes. Cruise berth, shuttle and transport arrangements can change. Check your cruise line’s latest information before leaving the ship.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
export const portGuideNotice = portGuideContent.notice;
