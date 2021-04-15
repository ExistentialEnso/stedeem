const redeemURL = "https://store.steampowered.com/account/registerkey?key="

/**
 * Basic React component for displaying a link to redeem a single Steam key
 */
var RedemptionLink = ({steamKey}) => (
    <div>
        <a href={redeemURL + steamKey} target="_blank" rel="noreferrer">{steamKey}</a>
    </div>
)

export default RedemptionLink