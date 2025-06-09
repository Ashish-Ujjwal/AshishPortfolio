const Price = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Price plans <span data-number={8} />
				</h5>
			</div>
			<div className="col-lg-6">
				{/* price table */}
				<div
					className="trm-price trm-popular trm-scroll-animation"
					data-scroll=""
					data-scroll-offset={40}
				>
					{/* card header */}
					<div className="trm-price-header">
						<h6>Basic Website Package</h6>
					</div>
					{/* card header end */}
					{/* price */}
					<div className="trm-price-number">
						<sup>$</sup>99<sup></sup>
					</div>
					{/* price end */}
					<div className="trm-divider trm-mb-40 trm-mt-40" />
					{/* price list */}
					<ul className="trm-price-list">
						<li className="trm-label">Responsive Design.</li>
						<li className="trm-label">Performance Optimization.</li>
						<li className="trm-label trm-label-light">Maintenance & Support</li>
						<li className="trm-label trm-label-light">
							Integration with Backend Systems.
						</li>
						<li className="trm-label trm-label-light">User / Admin Portal.</li>
					</ul>
					{/* price list end */}
					<a data-fancybox="" href="#trm-order" className="trm-btn">
						Order now <i className="fas fa-arrow-right" />
					</a>
				</div>
				{/* price table */}
			</div>
			<div className="col-lg-6">
				{/* price table */}
				<div
					className="trm-price trm-scroll-animation"
					data-scroll=""
					data-scroll-offset={40}
				>
					{/* card header */}
					<div className="trm-price-header">
						<h6>Full Site + Service</h6>
					</div>
					{/* card header end */}
					{/* price */}
					<div className="trm-price-number">
						<sup>$</sup>199<sup></sup>
					</div>
					{/* price end */}
					<div className="trm-divider trm-mb-40 trm-mt-40" />
					{/* price list */}
					<ul className="trm-price-list">
						<li className="trm-label">Maitenance & Support.</li>
						<li className="trm-label">Integration with Backend Systems.</li>
						<li className="trm-label">User / Admin Portal.</li>
						<li className="trm-label">Changes to Site.</li>
						<li className="trm-label">Performance Optimization.</li>
					</ul>
					{/* price list end */}
					<a data-fancybox="" href="#trm-order" className="trm-btn">
						Order now <i className="fas fa-arrow-right" />
					</a>
				</div>
				{/* price table end */}
			</div>
		</div>
	);
};
export default Price;
