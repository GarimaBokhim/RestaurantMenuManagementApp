export function generateStaticParams() {
  return [{ id: "9810300909" }, { id: "9815908772" }];
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const phoneNumber = id;
  return (
    <div>
      <h1>User Page</h1>
      <h2>Phone Number : {phoneNumber}</h2>
    </div>
  );
}
