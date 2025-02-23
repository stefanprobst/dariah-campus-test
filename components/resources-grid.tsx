"use client";

import dynamic from "next/dynamic";

export const ResourcesGrid = dynamic(
	() => {
		return import("@/components/resources-grid.lazy").then((module) => {
			return module.ResourcesGrid;
		});
	},
	{ ssr: false },
);
