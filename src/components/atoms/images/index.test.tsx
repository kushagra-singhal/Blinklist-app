import { render, screen } from "@testing-library/react";

import Images from '.';

test('it render Images', () => {
    render(<Images src="https://s3-alpha-sig.figma.com/img/7a8d/2547/2a61cffee838cf588c90ce1fcfaedae7?Expires=1645401600&Signature=RkGnQg0P-uEz-r6SXOmfF7WL1238nRERd9lc3m8P~PRjNgCIHXl~h5p2vdqcvAzIEE~XbXyOuFp-GqvaQN8o~R-LDZszIKrx-YW3FxPe4VoL8zQG1Jxeoy~LtUXV9crD28dqsn679osyENH1vlrGF6ilvAIQ1FvC2YNVdLb7hmb1PEU-yryxB1Jw6XjHCi4kjWaOGWEiEVz~moIJlCB1bv4g8TXrGygYhaas4-3OklHw--SyUqCv9shDWENoopYTTMuhPFf8yzbLrrqN5lrJrU3fu2u73zdwkBpx3hZ6cztEjco8u-j9OYnZq06-qdR~Nqbqrmm5dEagMgfpty09tQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
});