import LinkCard from "./LinkCard";

export default function Links() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
      <LinkCard
        title="Store Home"
        link="https://www.amazon.com/s?i=merchant-items&me=A1EEYPEVF7DX6F&linkCode=ll2&tag=amannhomegood-20&linkId=0ff135e41b42b3212aad27b69324a5cb&language=en_US&ref_=as_li_ss_tl"
        img="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      />
      <LinkCard
        title="Amazon Best Sellers"
        link="https://www.amazon.com/Best-Sellers/zgbs?&linkCode=ll2&tag=amannhomegood-20&linkId=5a44ab3908fbce312dcaaa61ca1f9f66&language=en_US&ref_=as_li_ss_tl"
        img="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80"
      />
      <LinkCard
        title="Amazon Clearance"
        link="https://www.amazon.com/clearance/s?k=clearance+items&linkCode=ll2&tag=amannhomegood-20&linkId=109e6256f4a100c07101a35b1601f9b2&language=en_US&ref_=as_li_ss_tl"
        img="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
      />
    </div>
  );
}
