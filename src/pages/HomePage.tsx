import { HeroCard } from "../components/cards/HeroCard.tsx";
import { LocationCard } from "../components/cards/LocationCard.tsx";
import { AvailabilityCard } from "../components/cards/AvailabilityCard.tsx";
import { SocialCard } from "../components/cards/SocialCard.tsx";
import { SocialPlatform } from "../components/helpers/SocialOptions.tsx";

export const HomePage = () => {
    // Bento grid layout
    return <main className="max-w-5xl mx-auto mt-6 mb-6 mv-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <HeroCard
            name="Benny Reyes Sosa"
            role="Software Engineer"
            description="I'm a Software Engineer with over 7 years of experience in mobile and web development."
            isAvailable={true}
            stack={["Swift", "SwiftUI", "Objective-C", "Kotlin", "Java", "Python", "TypeScript"]}
        />
        <LocationCard />
        <AvailabilityCard />

        <SocialCard 
            platform={SocialPlatform.GITHUB} 
            url="https://github.com/009Benny" 
        />        
        <SocialCard 
            platform={SocialPlatform.LINKEDIN} 
            url="https://www.linkedin.com/in/benny-reyes-sosa/" 
        />
        <SocialCard 
            platform={SocialPlatform.APP_STORE} 
            url="https://apps.apple.com" 
        />
    </main>
}