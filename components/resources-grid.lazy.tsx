"use client";

import { Masonry } from "masonic";
import type { ReactNode } from "react";

import { ResourcePreviewCard } from "@/components/resource-preview-card";
import type { ContentType } from "@/lib/content/options";

interface ResourcesGridProps {
	peopleLabel: string;
	resources: Array<{
		contentType: ContentType | "curriculum" | "event" | "pathfinder";
		href: string;
		id: string;
		locale: string;
		people: Array<{ id: string; name: string; image: string }>;
		summary: { content: string; title: string };
		title: string;
	}>;
}

export function ResourcesGrid(props: ResourcesGridProps): ReactNode {
	const { peopleLabel, resources } = props;

	return (
		<Masonry
			columnGutter={24}
			columnWidth={384}
			items={resources}
			overscanBy={5}
			render={({ data }) => {
				return <ResourcePreviewCard peopleLabel={peopleLabel} {...data} />;
			}}
		/>
	);
}
