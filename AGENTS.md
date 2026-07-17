# Palma Shore Excursions

World 2.0 editorial cruise planning site for palmashoreexcursions.com.

## Positioning

Your Mediterranean Island Day

## Destination identity (World 2.0)

Uses the shared destination logo system (Málaga was the original prototype).

- Config: `src/data/destination-identity.ts`
- Component: `src/components/DestinationLogo.tsx`
- Active mark: `logoConcept: "anchor-arch"` (switch to `"harbour-m"` to compare)
- Variants: `full` | `compact` | `mark`

Future destinations should reuse the same component with destination/descriptor/strapline config only — do not rebuild per site.

## Key paths

- Homepage: `src/app/page.tsx`
- World 2.0 components: `ChooseYourMallorca.tsx`, `SpiritOfMallorca.tsx`, `HonestAdvice.tsx`, `EditorsCollection.tsx`, `WowCollectionFeature.tsx`, `SignatureMallorcaFeature.tsx`, `CruisePassengerRatings.tsx`, `CruiseHeroTrust.tsx`, `YourDayAshore.tsx`, `DestinationLogo.tsx`
- Signature placeholder: `/signature-mallorca-experience`
- Port guide (primary SEO): `/palma-cruise-port`
- Things to do: `/things-to-do-in-palma-from-a-cruise-ship`
- Schedule hub: `/palma-cruise-ship-schedule`
- Internal planning: `FUTURE_SIGNATURE_TOUR.md`
- Data: `src/data/`

## Regenerate content

```bash
npm run download:images
npm run build
```
