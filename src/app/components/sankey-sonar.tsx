'use client'

import { Sankey } from "recharts"
import DemoSankeyLink from "./DemoSankeyLink"
import DemoSankeyNode from "./DemoSankeyNode"

export const SankeySonar = () => {
    const data1 = {
        nodes: [
            { category:'source', name: 'Findings' },
            
            { category:'metric', name: 'Reliability' },
            { category:'metric', name: 'Security' },
            { category:'metric', name: 'Maintainability' },
            
            { category:'squad', name: 'Prospects' },
            { category:'squad', name: 'Shared Services 1' },
            { category:'squad', name: 'Shared Services 2' },
        ],
        links: [
            { source: 0, target: 1, value: 100 },
            { source: 0, target: 2, value: 100 },
            { source: 0, target: 3, value: 100 },
            
            { source: 1, target: 4, value: 25 },
            { source: 1, target: 5, value: 25 },
            { source: 1, target: 6, value: 50 },

            { source: 2, target: 4, value: 50 },
            { source: 2, target: 5, value: 25 },
            { source: 2, target: 6, value: 25 },

            { source: 3, target: 4, value: 25 },
            { source: 3, target: 5, value: 50 },
            { source: 3, target: 6, value: 25 },

        ],
    };

    return (
        <div>
            <pre>Distribución de los hallazgos en SonarQube por Squad</pre>
            <Sankey
                width={960}
                height={500}
                margin={{ top: 20, bottom: 20 }}
                data={data1}
                nodeWidth={10}
                nodePadding={60}
                linkCurvature={0.61}
                iterations={64}
                link={<DemoSankeyLink />}
                node={<DemoSankeyNode containerWidth={960} />}
            >
                <defs>
                    <linearGradient id="linkGradient">
                        <stop offset="0%" stopColor="rgba(0, 136, 254, 0.5)" />
                        <stop offset="100%" stopColor="rgba(0, 197, 159, 0.3)" />
                    </linearGradient>
                </defs>
                {/* <Tooltip /> */}
            </Sankey>
        </div>
    )
}
