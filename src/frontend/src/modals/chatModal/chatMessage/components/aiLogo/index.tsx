export default function AiLogo() {
    return (
        <svg className="scale-150" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{"margin": "auto", "background": "none", "display": "block", "shapeRendering": "auto"}}  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <defs>
                <filter id="ldio-978hsxudfzl-filter" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3.6"></feGaussianBlur>
                    <feComponentTransfer result="cutoff">
                        <feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1"></feFuncA>
                    </feComponentTransfer>
                </filter>
            </defs>
            <g filter="url(#ldio-978hsxudfzl-filter)"><g transform="translate(50 50)">
                <g>
                    <circle cx="8" cy="0" r="5" fill="#2edbb5">
                        <animate attributeName="r" keyTimes="0;0.5;1" values="5.3999999999999995;12.6;5.3999999999999995" dur="5s" repeatCount="indefinite" begin="-0.2s"></animate>
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="5s" repeatCount="indefinite" begin="0s"></animateTransform>
                </g>
            </g><g transform="translate(50 50)">
                    <g>
                        <circle cx="8" cy="0" r="5" fill="#1d99ff">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="5.3999999999999995;12.6;5.3999999999999995" dur="2.5s" repeatCount="indefinite" begin="-0.15000000000000002s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="2.5s" repeatCount="indefinite" begin="-0.05s"></animateTransform>
                    </g>
                </g><g transform="translate(50 50)">
                    <g>
                        <circle cx="8" cy="0" r="5" fill="#4f41ff">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="5.3999999999999995;12.6;5.3999999999999995" dur="1.6666666666666665s" repeatCount="indefinite" begin="-0.1s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1.6666666666666665s" repeatCount="indefinite" begin="-0.1s"></animateTransform>
                    </g>
                </g><g transform="translate(50 50)">
                    <g>
                        <circle cx="8" cy="0" r="5" fill="#8400ff">
                            <animate attributeName="r" keyTimes="0;0.5;1" values="5.3999999999999995;12.6;5.3999999999999995" dur="1.25s" repeatCount="indefinite" begin="-0.05s"></animate>
                        </circle>
                        <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1.25s" repeatCount="indefinite" begin="-0.15000000000000002s"></animateTransform>
                    </g>
                </g></g></svg>
    )
}