import Section from './components/Section';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
	return (
		<div className="App">
			<Section
				name = {'pimg1'}
				imageText = {'tessio'}
				title = {'A message to our patrons and friends from Tessio'}
				text = {`We appreciate you, whether you were getting to know us or simply enjoying our selections and service. During this time, it means a lot to us to be able to continue to provide the same level of quality and service you would expect while adhering to Washington State Covid Requirements. While we're currently unable to provide a true dine-in experience, we have built a sheltered eating area just out front with two tables, each equipped with their own heater beneathe strings of lights, partitioned by a divider where our servers can assist you. We also provide plenty of take-out options for food and alcohol. We're all in this together so please take care and be safe.`}
			/>
			<Section
				name = {'pimg2'}
				imageText = {'pizza. beer. whiskey.'}
				pagination = {'menu-list-container'}
				title = {'TESSIO MENU'}
			/>
			<Section
				name = {'pimg3'}
				imageText = {'discover tessio'}
				title = {'About Us'}
				text = {`Our focus is pizza. Really good pizza made from scratch and baked in a brick pizza oven! We also have great appetizers, fresh salads, incredible sandwiches, and grilled paninis. But that's not all! We are serious about cocktails. They are also made from scratch by cocktail experts. Last but not least, we have the most extensive whiskey selection on the Kitsap Peninsula. All that and we are kid friendly!`}
				pagination = {'discover-tessio'}
			/>
			<div className="pimg1">
				<div className="ptext">
					<span className="border">
						Thank you!
					</span>
					<Breadcrumbs 
						text1 = {'back to menu'}
						text2 = {'back to contact'}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
