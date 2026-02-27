import { services } from "../../../components/data/services";
import ServiceDetailPage from "../../../components/services/ServiceDetailPage";

export default function ImplantsPage() {
    const service = services.find((s) => s.slug === "implants")!;
    const others = services
        .filter((s) => s.slug !== "implants")
        .map(({ slug, title, category }) => ({ slug, title, category }));

    return <ServiceDetailPage service={service} otherServices={others} />;
}
