
import React, { useState } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import MediaPowderInventory from './views/MediaPowderInventory';
import BatchManagement from './views/BatchManagement';
import BatchCreation from './views/BatchCreation';
import BatchDetails from './views/BatchDetails';
import MediaLotDetails from './views/MediaLotDetails';
import SolutionLotDetails from './views/SolutionLotDetails';
import ContainerLotDetails from './views/ContainerLotDetails';
import MediaPrep from './views/MediaPrep';
import Sterilization from './views/Sterilization';
import Dispensing from './views/Dispensing';
import FineTuning from './views/FineTuning';
import Reconciliation from './views/Reconciliation';
import QualityValidation from './views/QualityValidation';
import AuditLog from './views/AuditLog';
import ProductMaster from './views/ProductMaster';
import ContainerInventory from './views/ContainerInventory';
import SolutionInventory from './views/SolutionInventory';
import ContainerLotCreation from './views/ContainerLotCreation';
import PowderLotCreation from './views/PowderLotCreation';
import SolutionCreation from './views/SolutionCreation';
import ReconcileInventory from './views/ReconcileInventory';
import ReconcileBatchesList from './views/ReconcileBatchesList';
import MediaStatistics from './views/MediaStatistics';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedBatchId, setSelectedBatchId] = useState<string | null>(null);
  const [previousView, setPreviousView] = useState<AppView | null>(null);

  const navigateTo = (view: AppView) => {
    setPreviousView(currentView);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.INVENTORY_POWDER:
        return (
          <MediaPowderInventory 
            onLogShipment={() => navigateTo(AppView.POWDER_LOT_CREATION)} 
            onReconcile={() => navigateTo(AppView.RECONCILE_POWDER)}
            onViewLot={(id) => {
              setSelectedBatchId(id);
              navigateTo(AppView.MEDIA_LOT_DETAILS);
            }}
          />
        );
      case AppView.RECONCILE_POWDER:
        return <ReconcileInventory type="Powder" onBack={() => navigateTo(AppView.INVENTORY_POWDER)} />;
      case AppView.POWDER_LOT_CREATION:
        return <PowderLotCreation onCancel={() => navigateTo(AppView.INVENTORY_POWDER)} onSave={() => navigateTo(AppView.INVENTORY_POWDER)} />;
      case AppView.INVENTORY_CONTAINERS:
        return (
          <ContainerInventory 
            onAddLot={() => navigateTo(AppView.CONTAINER_LOT_CREATION)} 
            onReconcile={() => navigateTo(AppView.RECONCILE_CONTAINERS)}
            onViewContainer={(id) => {
              setSelectedBatchId(id);
              navigateTo(AppView.CONTAINER_LOT_DETAILS);
            }}
          />
        );
      case AppView.RECONCILE_CONTAINERS:
        return <ReconcileInventory type="Container" onBack={() => navigateTo(AppView.INVENTORY_CONTAINERS)} />;
      case AppView.CONTAINER_LOT_CREATION:
        return <ContainerLotCreation onCancel={() => navigateTo(AppView.INVENTORY_CONTAINERS)} onSave={() => navigateTo(AppView.INVENTORY_CONTAINERS)} />;
      case AppView.INVENTORY_SOLUTIONS:
        return (
          <SolutionInventory 
            onAddSolution={() => navigateTo(AppView.SOLUTION_CREATION)} 
            onReconcile={() => navigateTo(AppView.RECONCILE_SOLUTIONS)}
            onViewSolution={(id) => {
              setSelectedBatchId(id);
              navigateTo(AppView.SOLUTION_LOT_DETAILS);
            }}
          />
        );
      case AppView.RECONCILE_SOLUTIONS:
        return <ReconcileInventory type="Solution" onBack={() => navigateTo(AppView.INVENTORY_SOLUTIONS)} />;
      case AppView.SOLUTION_CREATION:
        return <SolutionCreation onCancel={() => navigateTo(AppView.INVENTORY_SOLUTIONS)} onSave={() => navigateTo(AppView.INVENTORY_SOLUTIONS)} />;
      case AppView.BATCH_MANAGEMENT:
        return (
          <BatchManagement 
            onNewBatch={() => navigateTo(AppView.BATCH_CREATION)} 
            onViewBatch={(id) => {
              setSelectedBatchId(id);
              navigateTo(AppView.BATCH_DETAILS);
            }}
          />
        );
      case AppView.BATCH_DETAILS:
        return <BatchDetails batchId={selectedBatchId || ''} onBack={() => navigateTo(previousView || AppView.BATCH_MANAGEMENT)} />;
      case AppView.MEDIA_LOT_DETAILS:
        return <MediaLotDetails lotId={selectedBatchId || ''} onBack={() => navigateTo(previousView || AppView.INVENTORY_POWDER)} />;
      case AppView.SOLUTION_LOT_DETAILS:
        return <SolutionLotDetails lotId={selectedBatchId || ''} onBack={() => navigateTo(previousView || AppView.INVENTORY_SOLUTIONS)} />;
      case AppView.CONTAINER_LOT_DETAILS:
        return <ContainerLotDetails lotId={selectedBatchId || ''} onBack={() => navigateTo(previousView || AppView.INVENTORY_CONTAINERS)} />;
      case AppView.BATCH_CREATION:
        return <BatchCreation onNext={() => navigateTo(AppView.MEDIA_PREP)} />;
      case AppView.MEDIA_PREP:
        return <MediaPrep onNext={() => navigateTo(AppView.STERILIZATION)} onBack={() => navigateTo(AppView.BATCH_MANAGEMENT)} />;
      case AppView.STERILIZATION:
        return <Sterilization onNext={() => navigateTo(AppView.DISPENSING)} onBack={() => navigateTo(AppView.MEDIA_PREP)} />;
      case AppView.DISPENSING:
        return (
          <Dispensing 
            onNext={() => navigateTo(AppView.FINE_TUNING)} 
            onBack={() => navigateTo(AppView.STERILIZATION)} 
            onViewBatchDetails={(id) => {
              setSelectedBatchId(id);
              navigateTo(AppView.BATCH_DETAILS);
            }}
          />
        );
      case AppView.FINE_TUNING:
        return <FineTuning onNext={() => navigateTo(AppView.QUALITY_VALIDATION)} onBack={() => navigateTo(AppView.DISPENSING)} />;
      case AppView.RECONCILIATION:
        return <Reconciliation onNext={() => navigateTo(AppView.QUALITY_VALIDATION)} onBack={() => navigateTo(AppView.FINE_TUNING)} />;
      case AppView.RECONCILE_BATCHES_LIST:
        return <ReconcileBatchesList onSelectBatch={() => navigateTo(AppView.RECONCILIATION)} />;
      case AppView.QUALITY_VALIDATION:
        return <QualityValidation onFinish={() => navigateTo(AppView.BATCH_MANAGEMENT)} />;
      case AppView.REPORTS_STATISTICS:
        return (
          <MediaStatistics 
            onViewDetailedReport={(id) => {
              setSelectedBatchId(id);
              navigateTo(AppView.BATCH_DETAILS);
            }} 
          />
        );
      case AppView.AUDIT_LOG:
        return <AuditLog />;
      case AppView.PRODUCT_MASTER:
        return <ProductMaster />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={navigateTo} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header currentView={currentView} />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
