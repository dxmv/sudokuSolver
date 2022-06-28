import React from "react";
import "./notification.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

export default function Notification({
	text,
	type,
	id,
}: {
	text: string;
	type: "Success" | "Warning";
	id: string;
}) {
	return (
		<div className="noti" id={id}>
			{type === "Success" ? (
				<BiCheckCircle size={40} color="#72b01d" />
			) : (
				<RiErrorWarningLine size={40} color="#b01d29" />
			)}

			<p
				className={
					type === "Success"
						? "success-text noti-text"
						: "warning-text noti-text"
				}
			>
				{text}
			</p>
		</div>
	);
}
