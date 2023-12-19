const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
<main className="h-full bg-gradient-to-r from-blue-800 to-cyan-800 oveflow-auto">

<div className="mx-auto max-w-screen-xl h-full w-full">
{children} 
</div>
</main>
    )
}

export default LandingLayout