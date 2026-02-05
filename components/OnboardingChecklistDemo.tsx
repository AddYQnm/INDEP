// demo.tsx
import { OnboardingChecklist } from "@/components/ui/onboarding-checklist"; // Adjust the import path

const OnboardingChecklistDemo = () => {
  // Sample data for the component
  const checklistData = {
    title: "DIFFUSEZ SUR LE PLUS GRAND RÉSEAU D’ÉCRANS EXTÉRIEURS",
    description:
      "Rejoignez notre réseau d’écrans digitaux extérieurs implantés dans la rue sur des emplacements stratégiques à fort trafic piéton et voiture.",
    items: [
      { id: 1, text: "PAN card" },
      { id: 2, text: "GST number, if applicable" },
      {
        id: 3,
        text: "FSSAI license",
        helperText: "Don't have a FSSAI license?",
        helperLink: { href: "#", text: "Apply here" },
      },
      {
        id: 4,
        text: "Menu & profile food image",
        helperText: "What is profile food image?",
        helperLink: { href: "#", text: "Refer here" },
      },
      { id: 5, text: "Bank account details" },
    ],
    videoThumbnailUrl: "https://i.ytimg.com/vi/3yBgLxgwS1U/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA9pydkJZGVZZ9Nrkz0I5ZO8F0Rsg", // Replace with an actual thumbnail URL
    videoUrl: "https://www.youtube.com/embed/3yBgLxgwS1U?si=_MZFE2nm9fevcj76&t=30", // Replace with the embed URL of your video
  };

  return (
    <div className="w-full bg-background flex items-center justify-center p-4">
      <OnboardingChecklist
        title={checklistData.title}
        description={checklistData.description}
        items={checklistData.items}
        videoThumbnailUrl={checklistData.videoThumbnailUrl}
        videoUrl={checklistData.videoUrl}
      />
    </div>
  );
};

export default OnboardingChecklistDemo;