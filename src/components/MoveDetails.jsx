import React, { useState } from "react";
import DetailItem from "./DetailItem";
import InventoryCategory from "./InventoryCategory";
import InventoryItem from "./InventoryItem";
const MoveDetails = ({ moveItem }) => {
  const {
    old_floor_no,
    new_floor_no,
    old_elevator_availability,
    new_elevator_availability,
    old_parking_distance,
    new_parking_distance,
  } = moveItem;
  return (
    <div className="w-full space-y-4">
      {/* Additional Information Section */}
      <section className="bg-white p-4 shadow-md rounded-md">
        <header className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Additional Information</h3>
          <button className="btn btn-dark btn-sm" type="button">
            Edit Additional Info
          </button>
        </header>
        <p className="text-gray-600">No Additional Information provided.</p>
      </section>

      {/* House Details Section */}
      <section className="bg-white p-4 shadow-md rounded-md">
        <header className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">House Details</h3>
          <button className="btn btn-dark btn-sm" type="button">
            Edit House Details
          </button>
        </header>

        <div className="space-y-3">
          {/* Existing House Details */}
          <div>
            <h6 className="font-semibold text-gray-700">
              Existing House Details
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <DetailItem label="Floor No." value={old_floor_no} />
              <DetailItem label="Elevator Available" value={old_elevator_availability} />
              <DetailItem
                label="Distance from Door to Truck"
                value={old_parking_distance}
                className="md:col-span-2"
              />
            </div>
          </div>

          {/* New House Details */}
          <div>
            <h6 className="font-semibold text-gray-700">New House Details</h6>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            


              <DetailItem label="Floor No." value={new_floor_no} />
              <DetailItem label="Elevator Available" value={new_elevator_availability} />
              <DetailItem
                label="Distance from Door to Truck"
                value={new_parking_distance}
                className="md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Details Section */}
      <section className="bg-white p-4 shadow-md rounded-md">
        <header className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Inventory Details</h3>
          <button className="btn btn-dark btn-sm">Edit Inventory</button>
        </header>

        {/* Inventory Category */}
        <div>
          <InventoryCategory title="Furniture" itemCount={9}>
            <InventoryItem
              label="Sectional Sofa"
              subLabel="2 Piece"
              quantity={2}
            />
            <InventoryItem label="Sofa Footrest" quantity={1} />
            <InventoryItem label="Ottoman" quantity={1} />
            <InventoryItem label="Bean Bags" subLabel="Medium" quantity={1} />
          </InventoryCategory>
          <InventoryCategory title="Chair" itemCount={4}>
            <InventoryItem label="Plastic" quantity={1} />
            <InventoryItem label="Executive" quantity={1} />
            <InventoryItem label="Stool" quantity={1} />
            <InventoryItem label="Foldable" quantity={1} />
          </InventoryCategory>
        </div>
      </section>
    </div>
  );
};

export default MoveDetails;