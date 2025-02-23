"use client";

import { ResourcePreviewCard } from "@/components/resource-preview-card";
import type { ContentType } from "@/lib/content/options";
import { useMasonryLayout } from "@/lib/content/use-masonry-layout";

export interface ResourcesGridProps {
	peopleLabel: string;
	resources: Array<{
		id: string;
		title: string;
		href: string;
		locale: string;
		people: Array<{ id: string; name: string; image: string }>;
		contentType: ContentType | "curriculum" | "event" | "pathfinder";
		summary: { content: string; title: string };
	}>;
}

export function ResourcesGrid(props: ResourcesGridProps): JSX.Element {
	const { peopleLabel, resources } = props;

	const columns = useMasonryLayout(resources);

	if (columns != null) {
		return (
			<ul className="flex space-x-6">
				{columns.map((resources, index) => {
					return (
						<div key={index} className="flex-1 space-y-6" role="presentation">
							{resources.map((resource) => {
								return (
									<li key={resource.id}>
										<ResourcePreviewCard peopleLabel={peopleLabel} {...resource} />
									</li>
								);
							})}
						</div>
					);
				})}
			</ul>
		);
	}

	return (
		<ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{resources.map((resource) => {
				return (
					<li key={resource.id}>
						<ResourcePreviewCard peopleLabel={peopleLabel} {...resource} />
					</li>
				);
			})}
		</ul>
	);
}
