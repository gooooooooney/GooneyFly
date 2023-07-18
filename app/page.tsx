import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
	

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>

				<Button color="primary">Button</Button>
				<Button color="primary" variant="faded">
					Faded
				</Button>
				<Button color="primary" variant="bordered">
					Bordered
				</Button>
				<Button color="primary" variant="light">
					Light
				</Button>
				<Button color="primary" variant="flat">
					Flat
				</Button>
				<Button color="primary" variant="ghost">
					Ghost
				</Button>
				<Button color="primary" variant="shadow">
					Shadow
				</Button>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

		</section>
	);
}
