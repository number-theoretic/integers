export default function factorizer({$2, iadd1, eq0, gt1, divmod}) {
	return function* (n) {
		let divisor = $2();

		while (gt1(n)) {
			const [q, r] = divmod(n, divisor);

			if (eq0(r)) {
				yield divisor;

				n = q;
			} else {
				divisor = iadd1(divisor);
			}
		}
	};
}
