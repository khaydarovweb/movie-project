import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const QRCodeGenerator: React.FC = () => {
	const [text, setText] = useState<string>('');
	const [qrCodeUrl, setQRCodeUrl] = useState<string>('');

	const generateQR = () => {
		if (text.trim() !== '') {
			const encodedText = encodeURIComponent(text);
			const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=200x200`;
			setQRCodeUrl(qrCodeUrl);
			toast.success('Your QR code is ready!');
		} else {
			toast.error('Please enter text to generate QR code!');
		}
	};

	return (
		<div>
			<Toaster />
			<h1>QR Code Generator</h1>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter text to generate QR code"
			/>
			<button onClick={generateQR}>Generate QR Code</button>
			{qrCodeUrl && (
				<div>
					<img src={qrCodeUrl} alt="QR Code" />
				</div>
			)}
		</div>
	);
};

export default QRCodeGenerator;
